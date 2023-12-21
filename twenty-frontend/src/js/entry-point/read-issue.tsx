import React from "react";
import ReactDOM from "react-dom/client";
import { ReadIssue } from "/components/ReadIssue";

(function () {
  const root = document.getElementById("reactapp")!;
  ReactDOM.createRoot(root).render(<ReadIssue />);
})();
