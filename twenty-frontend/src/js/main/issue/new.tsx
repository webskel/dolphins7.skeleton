import React from "react";
import ReactDOM from "react-dom/client";
import { Issue } from "/components/Issue";

(function () {
  const root = document.querySelector(".react-mount.new-issue")!;
  ReactDOM.createRoot(root).render(<Issue />);
})();
