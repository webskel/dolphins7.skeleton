import React, { useState, useEffect } from "react";
import { useProjects } from "/hooks/queries/useProjects";
import { Project, Maybe } from "/types/schema";

type Props = {
  selected: Maybe<string>;
  onChange: (project: Maybe<Project>) => void;
};

export function ProjectSelect({ onChange, selected }: Props) {
  const { data, loading } = useProjects();
  const projects: Project[] = data?.projects || [];
  const options = [
    <option>Any project</option>,
    ...projects.map(project => {
      return <option value={project.id}>{project.name}</option>;
    }),
  ];

  if (loading) {
    return null;
  }

  return (
    <select
      className="flex p-3 w-3/4"
      defaultValue={selected}
      onChange={event => {
        const { target } = event;
        const project = projects.find(p => p.id === Number(target.value));
        onChange(project);
      }}
    >
      {...options}
    </select>
  );
}
