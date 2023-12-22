import React from "react";
export function NavBar() {
  return (
    <div className="navbar">
      <div className="h1">Issues</div>
      <div>
        <a href="/issues/new">New issue</a>
      </div>
    </div>
  );
}
