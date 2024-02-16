import { useEffect, useContext } from "react";
import { ParamContext } from "~/Context";
import { NavBar } from "~/components/NavBar";
import { Group } from "~/components/Group";
import { TaskStatus, Maybe } from "~/types/schema";
import { useTasks } from "~/hooks/queries/useTasks";

export function Tasks() {
  const params = useContext(ParamContext);
  const projectId: Maybe<number> = params.projectId
    ? parseInt(params.projectId)
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
      <div className="w-1/4">
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
