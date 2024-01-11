import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateTask } from "/hooks/mutations/useCreateTask";
import { useUpdateTask } from "/hooks/mutations/useUpdateTask";
import { useFindTask } from "/hooks/queries/useFindTask";
import { useProjects } from "/hooks/queries/useProjects";
import { Task, Project, TaskInput, Maybe } from "/types/schema";
import { rendermd } from "/lib/markdown-utils";
import classnames from "classnames";

const DEFAULT_TASK_CONTENT = [
  "## Subtasks",
  "",
  "* [] Task 1",
  "* [] Task 2",
  "* [] ...",
  "",
  "## Description",
  "",
  "Add a description here....",
].join("\n");

export function Task({ taskId }: { taskId?: number }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue: set,
  } = useForm<TaskInput>({
    defaultValues: { projectId: 1 },
  });
  const [isEditable, setIsEditable] = useState<boolean>(!taskId);
  const [createTask] = useCreateTask();
  const updateTask = useUpdateTask();
  const { data: taskData, loading: findingTask } = useFindTask(Number(taskId));
  const { data: projectsData, loading: findingProjects } = useProjects();
  const task = taskData?.findTask;
  const projects = projectsData?.projects;
  const content = watch("content");
  const projectId: Maybe<number> = watch("projectId");
  const onSave = (input: TaskInput) => {
    if (taskId) {
      updateTask({ variables: { taskId, input } }).then(
        () => (location.href = "/tasks"),
      );
    } else {
      createTask({ variables: { input } }).then(
        () => (location.href = "/tasks"),
      );
    }
  };

  useEffect(() => {
    const title = task ? task.title : "New task";
    document.title = title;
  }, []);

  useEffect(() => {
    set("projectId", task?.project?.id);
  }, [task?.project?.id]);

  if (findingProjects || findingTask) {
    return null;
  }

  return (
    <form className="task" onSubmit={handleSubmit(onSave)}>
      <div className="panel">
        <div className="panel-header panel-tabs">
          <ul className="tabs">
            <li
              className={classnames({ active: isEditable })}
              onClick={() => setIsEditable(true)}
            >
              Write
            </li>
            <li
              className={classnames({ active: !isEditable })}
              onClick={() => setIsEditable(false)}
            >
              Preview
            </li>
          </ul>
        </div>
        <div className="panel-body">
          <div>
            <select
              {...register("projectId")}
              className="form"
              value={projectId}
              onChange={event => {
                const v: string = event.target.value;
                set("projectId", Number(v));
              }}
            >
              {projects.map((project: Project, key: number) => {
                return (
                  <option key={key} value={project.id}>
                    {project.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <input
              className="form"
              type="text"
              placeholder="Title"
              defaultValue={task?.title}
              {...register("title", { required: true })}
            />
            <input type="hidden" name="projectId" {...register("projectId")} />
          </div>
          {isEditable ? (
            <>
              <div className="row textarea">
                <textarea
                  className="form"
                  placeholder="Add your description heren"
                  defaultValue={task?.content || DEFAULT_TASK_CONTENT}
                  {...register("content", { required: true })}
                />
              </div>
              <div className="row">
                <input className="form" type="submit" value="Save" />
              </div>
            </>
          ) : (
            <div
              className="task content"
              dangerouslySetInnerHTML={{
                __html: rendermd(content || task?.content),
              }}
            />
          )}
        </div>
      </div>
    </form>
  );
}
