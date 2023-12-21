import React from "react";
import ReactDOM from "react-dom/client";
import { ShowIssue } from "/components/ShowIssue";

(function () {
  const root = document.getElementById("reactapp")!;
  ReactDOM.createRoot(root).render(<ShowIssue />);
})();
