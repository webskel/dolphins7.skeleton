import React, { useContext } from "react";
import { ParamContext } from "/Context";
import ReactDOM from "react-dom/client";
import { App } from "/components/App";
import { Task } from "/components/Task";

(function () {
  const root = document.querySelector(".react-root")!;
  const params = useContext(ParamContext);
  ReactDOM.createRoot(root).render(
    <App>
      <Task taskId={Number(params.id)} />
    </App>,
  );
})();
