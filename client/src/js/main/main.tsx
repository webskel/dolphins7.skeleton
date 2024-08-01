import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "~/components/App";
import "@css/main.scss";

(function () {
  const root = document.querySelector(".react-app");
  ReactDOM.createRoot(root).render(<App/>);
})();
