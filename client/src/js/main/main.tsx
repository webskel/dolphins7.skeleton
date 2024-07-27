import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "~/components/App";
import { Tasks } from "~/components/Tasks";
import { Projects } from "~/components/Projects";
import { Task } from "~/components/Task";
import "@css/main.scss";

(function () {
  const components = {
    Task: () => (
      <App>
        <Task />
      </App>
    ),
    Tasks: () => (
      <App>
        <Tasks />
      </App>
    ),
    Projects: () => (
      <App>
        <Projects />
      </App>
    ),
  };
  const ents = Object.entries(components);
  for (let i = 0; i < ents.length; i++) {
    const [component, getJSX] = ents[i];
    const root = document.querySelector(`.react-${component.toLowerCase()}`);
    if (root) {
      ReactDOM.createRoot(root).render(getJSX());
      break;
    }
  }
})();
