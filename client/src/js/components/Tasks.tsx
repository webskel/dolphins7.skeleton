import { useEffect, useContext } from "react";
import { AppContext } from "~/Context";
import { NavBar } from "~/components/NavBar";
import { Group } from "~/components/Group";
import { TaskStatus, Maybe } from "~/types/schema";
import { useTasks } from "~/hooks/queries/useTasks";

export function Tasks() {
  const { params, cookies } = useContext(AppContext);
  const projectId: Maybe<number> =
    params.projectId || cookies.projectId
      ? Number(params.projectId || cookies.projectId)
      : null;

  useEffect(() => {
    document.title = "Tasks";
  }, []);

  const getTasks = (status: TaskStatus) => {
    return () => {
      return useTasks({ variables: { status, projectId } });
    };
  };

  return (
    <div className="flex">
      <div className="w-1/4 pl-5">
        <NavBar />
      </div>
      <div className="w-3/4">
        <Group
          groupName="Working on it"
          getItems={getTasks(TaskStatus.InProgress)}
        />
        <Group groupName="Ready" getItems={getTasks(TaskStatus.Ready)} />
        <Group groupName="Backlog" getItems={getTasks(TaskStatus.Backlog)} />
      </div>
    </div>
  );
}
