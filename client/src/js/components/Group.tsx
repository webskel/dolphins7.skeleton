import React from "react";
import type { Task } from "~/types/schema";
import classnames from "classnames";
import { DateTime } from "luxon";
import { QueryResult } from "@apollo/client";
import { TaskStatusSelect } from "~/components/TaskStatusSelect";

type Props = {
  groupName: string;
  getItems: () => QueryResult;
};

export function Group({ groupName, getItems }: Props) {
  const { data, loading } = getItems();
  const items = data?.tasks;

  if (loading) {
    return null;
  }

  return (
    <div>
      <h1 className="bg-secondary text-primary p-3 rounded">{groupName}</h1>
      <div>
        {items?.length ? (
          <ul className="flex flex-wrap">
            {items.map((task: Task, key: number) => {
              const { updatedAt } = task;
              const datetime = DateTime.fromISO(updatedAt);
              const classes = {};
              const editHref = `/tasks/edit#id=${task.id}`;
              return (
                <li
                  className={classnames(
                    "flex flex-row p-3 hover-bg-secondary w-full",
                    classes,
                  )}
                  key={key}
                >
                  <div className="flex flex-wrap w-3/4">
                    <div className="w-full">
                      <a
                        className="no-underline text-accent block h-14"
                        href={editHref}
                      >
                        <span className="block w-full">{task.title}</span>
                        <span className="block w-full text-smaller text-secondary">
                          {datetime.toFormat("dd LLL, yyyy")} at{" "}
                          {datetime.toFormat("HH:mm")}
                        </span>
                      </a>
                    </div>
                    <div>
                      <a
                        href={`/tasks/#projectId=${task.project.id}`}
                        onClick={() => {
                          location.hash = `projectId=${task.project.id}`;
                          location.reload();
                        }}
                        className="flex no-underline align-items-center justify-content-center text-primary text-smaller rounded border-secondary p-2"
                        style={{ backgroundColor: task.project.color }}
                      >
                        {task.project.name}
                      </a>
                    </div>
                  </div>
                  <div className="flex h-12 w-1/4">
                    <TaskStatusSelect task={task} />
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>
            There are no {groupName.toLowerCase()} tasks.
            <br />
            <a className="w-100" href="/tasks/new">
              Add a task
            </a>{" "}
            .
          </p>
        )}
      </div>
    </div>
  );
}
