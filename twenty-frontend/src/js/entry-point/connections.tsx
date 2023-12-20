import React from "react";
import ReactDOM from "react-dom/client";
import { Connections } from "/components/Connections";

(function() {
  const root = document.getElementById("reactapp")!;
  ReactDOM.createRoot(root).render(
    <Connections />
  );
})();
