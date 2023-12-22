import React from "react";
import ReactDOM from "react-dom/client";
import { Issues } from "/components/Issues";
import { NavBar } from "/components/NavBar";

(function () {
  const n1 = document.querySelector(".react-mount.navbar");
  const n2 = document.querySelector(".react-mount.issues")!;
  ReactDOM.createRoot(n1).render(<NavBar />);
  ReactDOM.createRoot(n2).render(<Issues />);
})();
