import { useEffect, useState, useContext } from "react";
import { ParamContext } from "/Context";
import { useForm } from "react-hook-form";
import { useCreateTask } from "/hooks/mutations/useCreateTask";
import { useUpdateTask } from "/hooks/mutations/useUpdateTask";
import { useFindTask } from "/hooks/queries/useFindTask";
import { useProjects } from "/hooks/queries/useProjects";
import { Task, Project, TaskInput, Maybe } from "/types/schema";
import { rendermd } from "/lib/markdown-utils";
import { NavBar } from "/components/NavBar";
import { Tabs, Tab } from "/components/Tabs";

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

export function Task() {
  const params = useContext(ParamContext);
  const taskId = params.id ? parseInt(params.id) : null;
  const {
    register,
    handleSubmit,
    watch,
    setValue: set,
  } = useForm<TaskInput>({
    defaultValues: { projectId: 1 },
  });
  const [isEditable, setIsEditable] = useState<boolean>(!taskId);
  const createTask = useCreateTask();
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
    <div className="flex w-full h-full">
      <div className="w-1/4">
        <NavBar />
      </div>
      <div className="w-3/4">
        <h1>{task ? "Edit task" : "New task"}</h1>
        <form onSubmit={handleSubmit(onSave)}>
          <select
            {...register("projectId")}
            className="p-3 w-3/4 mb-3"
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
          <input
            className="p-3 flex w-3/4 mb-3"
            type="text"
            placeholder="Title"
            defaultValue={task?.title}
            {...register("title", { required: true })}
          />
          <Tabs
            labels={["Editor", "Preview"]}
            defaultLabel={taskId ? "preview" : "editor"}
            onChange={(tab: Tab) => {
              tab.id === "editor" ? setIsEditable(true) : setIsEditable(false);
            }}
          />
          {isEditable ? (
            <>
              <textarea
                className="p-3 h-72 flex w-3/4 mb-3"
                defaultValue={task?.content || DEFAULT_TASK_CONTENT}
                {...register("content", { required: true })}
              />
              <input
                className="cursor-pointer block bg-secondary text-primary p-3 rounded font-bold"
                type="submit"
                value="Save"
              />
            </>
          ) : (
            <div
              className="markdown h-50"
              dangerouslySetInnerHTML={{
                __html: rendermd(content || task?.content),
              }}
            />
          )}
        </form>
      </div>
    </div>
  );
}
