import React from "react";
import ReactDOM from "react-dom/client";
import { Task as Component } from "/components/Task";
import { Task } from "/types/schema";

(function () {
  const params = Object.fromEntries(
    location.hash
      .substring(1, location.hash.length)
      .split(",")
      .map(e => e.split("=")),
  );
  fetch(`/servlet/tasks/${params.id}`)
    .then(res => res.json())
    .then(({task}: {task: Task}) => {
      const root = document.querySelector(".react-mount.edit-task")!;
      ReactDOM.createRoot(root).render(<Component task={task} />);
    });
})();
