import React from "react";
import ReactDOM from "react-dom/client";
import { Issues } from "/components/Issues";

(function () {
  const root = document.getElementById("reactapp")!;
  ReactDOM.createRoot(root).render(<Issues />);
})();
