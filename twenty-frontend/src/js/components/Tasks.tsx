import React from "react";
import { useTasks } from "/hooks/useTasks";
import { useDestroyTask } from "/hooks/useDestroyTask";
import { TrashIcon, DoneIcon } from "/components/Icons";
import { DateTime } from "luxon";
import { Task } from "/types/schema";
import { useUpsertTask } from "/hooks/useUpsertTask";

export function Tasks() {
  const { tasks, setTasks } = useTasks();
  const upsertTask = useUpsertTask();
  const destroyTask = useDestroyTask();
  const onDestroy = (task: Task) => {
    destroyTask({ id: task.id })
      .then(() => tasks.filter((t: Task) => t.id !== task.id))
      .then((tasks: Task[]) => setTasks(tasks));
  };
  const onDone = (task: Task) => {
    upsertTask({ input: { id: task.id, state: "closed" } })
      .then(() => tasks.filter((t: Task) => t.id !== task.id))
      .then(tasks => setTasks(tasks));
  };
  return (
    <div className="table">
      <div className="table div">
        <span>Tasks</span>
        <a href="/tasks/new">New task</a>
      </div>
      <div className="table content">
        <ul className="items">
          {tasks.map((task: Task, key: number) => {
            const { updated_at: updatedAt } = task;
            const datetime = DateTime.fromISO(updatedAt);
            return (
              <li className="item" key={key}>
                <div className="top">
                  <a href={`/tasks/edit#id=${task.id}`}>
                    <span className="item title">{task.title}</span>
                  </a>
                  <div className="actions">
                    <DoneIcon onClick={() => onDone(task)} />
                    <TrashIcon onClick={() => onDestroy(task)} />
                  </div>
                </div>
                <div className="bottom">
                  <span>
                    {datetime.toFormat("dd LLL, yyyy")} at{" "}
                    {datetime.toFormat("HH:mm")}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
