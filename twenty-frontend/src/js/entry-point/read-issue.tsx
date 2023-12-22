import React from "react";
import ReactDOM from "react-dom/client";
import { ReadIssue } from "/components/ReadIssue";

(function () {
  const root = document.querySelector(".react-mount.edit-issue")!;
  ReactDOM.createRoot(root).render(<ReadIssue />);
})();
