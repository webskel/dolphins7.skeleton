import React from "react";
import { useProjects } from "/hooks/useProjects";

export function Projects() {
  const projects = useProjects();
  return (
    <>
      <span>Projects</span>
      <ul className="projects">
        {projects.map((project, i) => {
          return <li key={i}>{project.name}</li>;
        })}
      </ul>
    </>
  );
}
