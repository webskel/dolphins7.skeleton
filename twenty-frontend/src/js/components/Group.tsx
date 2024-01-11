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
      <h1 className="group-name">{groupName}</h1>
      <div className="group-items">
        {items.length ? (
          <ul className="items">
            {items.map((task: Task, key: number) => {
              const { updatedAt } = task;
              const datetime = DateTime.fromISO(updatedAt);
              const classes = {};
              const editHref = `/tasks/edit#id=${task.id}`;
              return (
                <li className={classnames("item", classes)} key={key}>
                  <div className="w-95">
                    <a className="w-100" href={editHref}>
                      <span className="title">{task.title}</span>
                      <span className="subtitle">
                        <span className="datetime">
                          {datetime.toFormat("dd LLL, yyyy")} at{" "}
                          {datetime.toFormat("HH:mm")}
                        </span>
                      </span>
                    </a>
                    <span className="break" />
                    <span className="tags">
                      <span
                        style={{ backgroundColor: task.project.color }}
                        className="tag"
                      >
                        {task.project.name}
                      </span>
                    </span>
                  </div>
                  <TaskStatusSelect task={task} />
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
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
