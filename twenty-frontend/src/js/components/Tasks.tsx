import React, { useState, useEffect } from "react";
import { useTasks } from "/hooks/queries/useTasks";
import { useDestroyTask } from "/hooks/mutations/useDestroyTask";
import { TrashIcon, DoneIcon } from "/components/Icons";
import { NavBar } from "/components/NavBar";
import { DateTime } from "luxon";
import { Task, TaskStatus } from "/types/schema";
import classnames from "classnames";
import { useCompleteTask } from "/hooks/mutations/useCompleteTask";

export function Tasks() {
  const { refetch, loading, data } = useTasks({variables: {status: TaskStatus.Ready}});
  const tasks = data?.tasks;
  const [destroyTask] = useDestroyTask();
  const [completeTask] = useCompleteTask();
  const [destroyedTask, setDestroyedTask] = useState<Task>(null);
  const [completedTask, setCompletedTask] = useState<Task>(null);

  useEffect(() => {
    document.title = "Tasks";
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="two-columns">
      <div className="column-1">
        <NavBar />
      </div>
      <div className="column-2">
        <div className="panel">
          <h1>Tasks</h1>
          <div className="panel-body">
            <ul className="collection">
              {tasks.map((task: Task, key: number) => {
                const { updatedAt } = task;
                const datetime = DateTime.fromISO(updatedAt);
                const wasDestroyed = task === destroyedTask;
                const wasCompleted = task === completedTask;
                const classes = {
                  completed: wasCompleted,
                  removed: wasDestroyed,
                };
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
                    <ul className="actions">
                      <li>
                        <DoneIcon
                          title="Complete task"
                          onClick={async (_e: React.MouseEvent) => {
                            await completeTask({
                              variables: { taskId: task.id },
                            });
                            setCompletedTask(task);
                            setTimeout(refetch, 500);
                          }}
                        />
                      </li>
                      <li>
                        <TrashIcon
                          title="Delete task"
                          onClick={async (_e: React.MouseEvent) => {
                            await destroyTask({
                              variables: { taskId: task.id },
                            });
                            setDestroyedTask(task);
                            setTimeout(refetch, 500);
                          }}
                        />
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
