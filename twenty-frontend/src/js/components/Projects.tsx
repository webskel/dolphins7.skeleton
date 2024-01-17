import React, { useEffect } from "react";
import { NavBar } from "/components/NavBar";
import { useProjects } from "/hooks/queries/useProjects";
import { Project } from "/types/schema";

export function Projects() {
  const { data, loading } = useProjects();
  const projects = data?.projects;

  useEffect(() => {
    document.title = "Projects";
  }, []);

  if (loading) {
    return;
  }

  return (
    <div className="flex">
      <div className="w-1/4">
        <NavBar />
      </div>
      <div className="w-3/4">
        <h1 className="bg-secondary text-primary p-3 rounded">Projects</h1>
        <ul className="flex flex-wrap">
          {projects.map((project: Project, i: number) => {
            return (
              <li
                className="flex flex-row p-3 hover-bg-secondary w-full"
                key={i}
              >
                <a
                  className="no-underline text-accent block h-14"
                  href={`/tasks/#projectId=${project.id}`}
                >
                  <span className="block w-full">{project.name}</span>
                  <span className="block w-full text-smaller text-secondary">
                    {project.path}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
