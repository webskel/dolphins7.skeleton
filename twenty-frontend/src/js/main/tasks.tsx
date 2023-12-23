import React from "react";
import ReactDOM from "react-dom/client";
import { Tasks } from "/components/Tasks";

(function () {
  const n1 = document.querySelector(".react-mount.tasks")!;
  ReactDOM.createRoot(n1).render(<Tasks />);
})();
