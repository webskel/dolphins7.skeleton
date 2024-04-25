import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "~/components/App";
import { Tasks } from "~/components/Tasks";
import { Projects } from "~/components/Projects";
import { Task } from "~/components/Task";

(function () {
  const components = {
    "react-task": () => (
      <App>
        <Task />
      </App>
    ),
    "react-tasks": () => (
      <App>
        <Tasks />
      </App>
    ),
    "react-projects": () => (
      <App>
        <Projects />
      </App>
    )
  };
  const ents = Object.entries(components);
  for (let i = 0; i < ents.length; i++) {
    const [name, getJSX] = ents[i];
    const root = document.querySelector(`.${name}`);
    if (root) {
      ReactDOM.createRoot(root).render(getJSX());
      break;
    }
  }
})();
