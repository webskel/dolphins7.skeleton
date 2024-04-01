import { useEffect, useState, useContext } from "react";
import { AppContext } from "~/Context";
import { useForm } from "react-hook-form";
import { useCreateTask } from "~/hooks/mutations/useCreateTask";
import { useUpdateTask } from "~/hooks/mutations/useUpdateTask";
import { useFindTask } from "~/hooks/queries/useFindTask";
import { Task, TaskInput, Maybe } from "~/types/schema";
import { rendermd } from "~/lib/markdown-utils";
import { NavBar } from "~/components/NavBar";
import { Tabs, Tab } from "~/components/Tabs";

const DEFAULT_TASK_CONTENT = [
  "## Description",
  "",
  "An example description",
  "",
  "## Checklist",
  "",
  "* [] item one",
  "* [] item two",
  "* [] ...",
  "",
].join("\n");

export function Task() {
  const { params, cookies } = useContext(AppContext);
  const projectId: Maybe<number> = Number(
    params.projectId || cookies.projectId,
  );
  const taskId = params.id ? Number(params.id) : null;
  const {
    register,
    handleSubmit,
    watch,
    setValue: set,
  } = useForm<TaskInput>({});
  const [isEditable, setIsEditable] = useState<boolean>(!taskId);
  const [createTask, updateTask] = [useCreateTask(), useUpdateTask()];
  const { data: taskData, loading: findingTask } = useFindTask(Number(taskId));
  const task = taskData?.findTask;
  const content = watch("content");
  const onSave = async (input: TaskInput) => {
    if (taskId) {
      updateTask({ variables: { taskId, input } }).then(
        () => (location.href = "/tasks"),
      );
    } else {
      const res = await createTask({ variables: { input } });
      const payload = res?.data?.createTask;
      const { errors } = payload;
      errors.length ? alert(errors) : (location.href = "/tasks");
    }
  };

  useEffect(() => {
    const title = task ? task.title : "New task";
    document.title = title;
  }, []);

  useEffect(() => {
    if (task?.project?.id) {
      set("projectId", task?.project?.id);
    }
  }, [task?.project?.id]);

  if (findingTask) {
    return null;
  }

  return (
    <div className="flex w-full h-full">
      <div className="w-1/4 pl-5">
        <NavBar />
      </div>
      <div className="w-3/4 pt-5">
        <form className="h-full" onSubmit={handleSubmit(onSave)}>
          <input
            type="hidden"
            {...register("projectId", {
              value: projectId,
            })}
          />
          <input
            className="p-3 flex w-3/4 mb-3 outline-none"
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
                className="p-3 flex w-3/4 mb-3"
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
