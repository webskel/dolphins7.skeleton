import React, { useEffect } from "react";
import { NavBar } from "/components/NavBar";
import { Group } from "/components/Group";
import { TaskStatus } from "/types/schema";
import { useTasks } from "/hooks/queries/useTasks";
export function Tasks() {
  useEffect(() => {
    document.title = "Tasks";
  }, []);

  const getTasks = (status: TaskStatus) => {
    return () => {
      return useTasks({ variables: { status } });
    };
  };

  return (
    <div className="two-columns">
      <div className="column-1">
        <NavBar />
      </div>
      <div className="column-2">
        <h1>Tasks</h1>
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
