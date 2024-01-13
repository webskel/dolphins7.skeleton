import React from "react";
import type { Task } from "/types/schema";
import classnames from "classnames";
import { DateTime } from "luxon";
import { QueryResult } from "@apollo/client";
import { TaskStatusSelect } from "/components/TaskStatusSelect";

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
    <div className="group">
      <h1 className="group-name w-100">{groupName}</h1>
      <div className="group-items">
        {items?.length ? (
          <ul className="items">
            {items.map((task: Task, key: number) => {
              const { updatedAt } = task;
              const datetime = DateTime.fromISO(updatedAt);
              const classes = {};
              const editHref = `/tasks/edit#id=${task.id}`;
              return (
                <li className={classnames("item", classes)} key={key}>
                  <div className="flex flex-wrap w-3/4">
                    <div className="w-full">
                      <a href={editHref}>
                        <span>{task.title}</span>
                        <span className="text-smaller text-secondary">
                          {datetime.toFormat("dd LLL, yyyy")} at{" "}
                          {datetime.toFormat("HH:mm")}
                        </span>
                      </a>
                    </div>
                    <div>
                      <span
                        className="flex align-items-center justify-content-center text-primary rounded border-secondary p-3"
                        style={{ backgroundColor: task.project.color }}
                      >
                        {task.project.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-content-end w-25">
                    <TaskStatusSelect task={task} />
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="empty-group">
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
