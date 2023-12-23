import { useState, useEffect } from "react";
import { Project } from "/types/schema";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/servlet/projects")
      .then(res => res.json())
      .then(res => setProjects(res.projects));
  }, []);

  return projects;
}
