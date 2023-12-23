import React from "react";
import ReactDOM from "react-dom/client";
import { Task } from "/components/Task";

(function () {
  const root = document.querySelector(".react-mount.edit-task")!;
  ReactDOM.createRoot(root).render(<Task/>);
})();
