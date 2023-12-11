import React from "react";
import ReactDOM from "react-dom/client";

function Connections() {
  return (
    <>
      <span className="connections">Connections</span>
    </>
  )
}

(function() {
  const root = document.getElementById("reactapp")!;
  ReactDOM.createRoot(root).render(
    <Connections />
  );
})();
