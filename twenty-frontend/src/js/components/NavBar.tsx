import React from "react";

export function NavBar() {
  return (
    <ul className="items nav">
      <h1>Tasks</h1>
      <li className="item">
        <a href="/tasks/new">New</a>&nbsp;task
      </li>
      <li className="item">
        <a href="/tasks">Show</a>&nbsp;tasks
      </li>
      <h1>Projects</h1>
      <li className="item">
        <a href="/projects">Show</a>&nbsp;projects
      </li>
    </ul>
  );
}
