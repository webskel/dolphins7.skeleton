import React from "react";
import ReactDOM from "react-dom/client";
import { NewIssueForm } from "/components/forms/NewIssueForm";

(function() {
  const root = document.getElementById("reactapp")!;
  ReactDOM.createRoot(root).render(
    <NewIssueForm />
  );
})();
