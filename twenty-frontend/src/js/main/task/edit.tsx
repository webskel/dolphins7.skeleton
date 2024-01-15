import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "/components/App";
import { Task } from "/components/Task";

(function () {
  const params = Object.fromEntries(
    location.hash
      .substring(1, location.hash.length)
      .split(",")
      .map(e => e.split("=")),
  );
  const root = document.querySelector(".react-root")!;
  ReactDOM.createRoot(root).render(
    <App>
      <Task taskId={Number(params.id)} />
    </App>,
  );
})();
