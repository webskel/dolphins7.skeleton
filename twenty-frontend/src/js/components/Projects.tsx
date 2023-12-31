import React, { useEffect } from "react";
import { useProjects } from "/hooks/useProjects";

export function Projects() {
  const projects = useProjects();

  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div className="table">
      <div className="table div">
        <span>Projects</span>
      </div>
      <div className="table content">
        <ul className="items projects">
          {projects.map((project, i) => {
            return (
              <li className="item" key={i}>
                <a href={`/tasks#project_id=${project.id}`}>
                  <span>{project.name}</span>
                  <span className="path">{project.path}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
