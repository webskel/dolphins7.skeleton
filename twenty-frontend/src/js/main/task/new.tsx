import React from "react";
import ReactDOM from "react-dom/client";
import { Task } from "/components/Task";

(function () {
  const root = document.querySelector(".react-mount.new-task")!;
  ReactDOM.createRoot(root).render(<Task />);
})();
