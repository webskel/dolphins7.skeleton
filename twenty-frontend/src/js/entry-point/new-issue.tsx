import React from "react";
import ReactDOM from "react-dom/client";
import { NewIssue } from "/components/forms/NewIssue";

(function () {
  const root = document.getElementById("reactapp")!;
  ReactDOM.createRoot(root).render(<NewIssue />);
})();
