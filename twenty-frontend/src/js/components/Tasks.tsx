import React, { useState } from "react";
import { useTasks } from "/hooks/useTasks";
import { useDestroyTask } from "/hooks/useDestroyTask";
import { TrashIcon, DoneIcon } from "/components/Icons";
import { DateTime } from "luxon";
import { Task, TASK_COMPLETE } from "/types/schema";
import { useUpsertTask } from "/hooks/useUpsertTask";
import classnames from "classnames";

type Action = () => Promise<unknown>;
type ActionContext = {
  on: Task;
  tasks: Task[];
  setTask: (t: Task | null) => unknown;
};

export function Tasks() {
  const [destroyedTask, setDestroyedTask] = useState<Task | null>(null);
  const [completedTask, setCompletedTask] = useState<Task | null>(null);
  const { tasks, setTasks } = useTasks();
  const upsertTask = useUpsertTask();
  const destroyTask = useDestroyTask();
  const perform = (
    action: Action,
    { on: task, tasks, setTask }: ActionContext,
  ) => {
    action()
      .then(() => tasks.filter((t: Task) => t.id !== task.id))
      .then((tasks: Task[]) => {
        setTask(task);
        setTimeout(() => {
          setTasks(tasks);
          setTask(null);
        }, 500);
      });
  };
  const onDestroy = (task: Task) => {
    const action = () => destroyTask({ id: task.id });
    perform(action, { on: task, tasks, setTask: setDestroyedTask });
  };
  const onComplete = (task: Task) => {
    const action = () =>
      upsertTask({ input: { id: task.id, status: TASK_COMPLETE } });
    perform(action, { on: task, tasks, setTask: setCompletedTask });
  };

  return (
    <div className="table">
      <div className="table div">
        <span>Tasks</span>
        <a href="/tasks/new">New task</a>
      </div>
      <div className="table content">
        <ul className="items tasks">
          {tasks.map((task: Task, key: number) => {
            const { updated_at: updatedAt } = task;
            const datetime = DateTime.fromISO(updatedAt);
            const wasDestroyed = task === destroyedTask;
            const wasCompleted = task === completedTask;
            const classes = { completed: wasCompleted, removed: wasDestroyed };
            const editHref = `/tasks/edit#id=${task.id}`;
            return (
              <li className={classnames("item", classes)} key={key}>
                <a href={editHref}>
                  <span className="item title">{task.title}</span>
                  <span className="date">
                    {datetime.toFormat("dd LLL, yyyy")} at{" "}
                    {datetime.toFormat("HH:mm")}
                  </span>
                </a>
                <ul className="actions">
                  <li>
                    <DoneIcon
                      title="Complete task"
                      onClick={(e: React.MouseEvent) => [
                        e.stopPropagation(),
                        onComplete(task),
                      ]}
                    />
                  </li>
                  <li>
                    <TrashIcon
                      title="Delete task"
                      onClick={(e: React.MouseEvent) => [
                        e.stopPropagation(),
                        onDestroy(task),
                      ]}
                    />
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
