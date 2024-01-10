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
    <div className="two-columns">
      <div className="column-1">
        <NavBar />
      </div>
      <div className="column-2">
        <div className="panel">
          <h1>Projects</h1>
          <div className="panel-body">
            <ul className="collection">
              {projects.map((project: Project, i: number) => {
                return (
                  <li className="item" key={i}>
                    <a href={`/tasks#project_id=${project.id}`}>
                      <span className="title">{project.name}</span>
                      <span className="subtitle">{project.path}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
