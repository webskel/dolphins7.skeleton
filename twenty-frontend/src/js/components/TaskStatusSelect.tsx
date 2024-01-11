import React from "react";
import { Task, TaskStatus } from "/types/schema";
import { useUpdateTask } from "hooks/mutations/useUpdateTask";
import { GET_TASKS } from "/hooks/queries/useTasks";

type Props = {
  task: Task;
};

export function TaskStatusSelect({ task }: Props) {
  const updateTask = useUpdateTask();
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value as TaskStatus;
    updateTask({
      awaitRefetchQueries: true,
      refetchQueries: [GET_TASKS, "GetTasks"],
      variables: { taskId: task.id, input: { status } },
    });
  };

  return (
    <select value={task.status} onChange={onChange}>
      <option value={TaskStatus.InProgress}>Active</option>
      <option value={TaskStatus.Ready}>Ready</option>
      <option value={TaskStatus.Complete}>Complete</option>
    </select>
  );
}
