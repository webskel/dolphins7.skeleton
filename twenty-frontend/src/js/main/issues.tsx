import React from "react";
import ReactDOM from "react-dom/client";
import { Issues } from "/components/Issues";

(function () {
  const n1 = document.querySelector(".react-mount.issues")!;
  ReactDOM.createRoot(n1).render(<Issues />);
})();
