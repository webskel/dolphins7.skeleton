import React, { useState, useEffect } from "react";
import { useTasks } from "/hooks/useTasks";
import { useDestroyTask } from "/hooks/useDestroyTask";
import { TrashIcon, DoneIcon } from "/components/Icons";
import { NavBar } from "/components/NavBar";
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

  useEffect(() => {
    document.title = "Tasks";
  }, []);

  return (
    <div className="two-columns">
      <div className="column-1">
        <NavBar/>
      </div>
      <div className="column-2">
        <div className="panel">
          <h1>Tasks</h1>
          <div className="panel-body">
            <ul className="collection">
              {tasks.map((task: Task, key: number) => {
                const { updated_at: updatedAt } = task;
                const datetime = DateTime.fromISO(updatedAt);
                const wasDestroyed = task === destroyedTask;
                const wasCompleted = task === completedTask;
                const classes = { completed: wasCompleted, removed: wasDestroyed };
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
                      <span className="break"></span>
                      <span className="tags">
                        <span style={{backgroundColor: task.project.color}} className="tag">
                          {task.project.name}
                        </span>
                      </span>
                    </div>
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
      </div>
    </div>
  );
}
