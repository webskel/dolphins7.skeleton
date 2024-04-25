import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "~/components/App";
import { Tasks } from "~/components/Tasks";
import { Projects } from "~/components/Projects";
import { Task } from "~/components/Task";

(function () {
  const components = {
    "react-newtask": (
      <App>
        <Task />
      </App>
    ),
    "react-edittask": (
      <App>
        <Task />
      </App>
    ),
    "react-tasks": (
      <App>
        <Tasks />
      </App>
    ),
    "react-projects": (
      <App>
        <Projects />
      </App>
    )
  };
  Object
    .entries(components)
    .forEach(([name, jsx]) => {
      const root = document.querySelector(`.${name}`);
      if (root) {
        ReactDOM.createRoot(root).render(jsx);
      }
    });
})();
