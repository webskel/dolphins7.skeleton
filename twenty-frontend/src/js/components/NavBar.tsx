import React from "react";

const BASE_CLASSNAMES     = [ "block", "w-3/4", "no-underline", "p-3"];
const ACTIVE_CLASSNAMES   = [...BASE_CLASSNAMES, "rounded", "bg-secondary", "text-primary" ].join(" ");
const INACTIVE_CLASSNAMES = [...BASE_CLASSNAMES, "text-accent"].join(" ");

export function NavBar() {
    return (
      <ul>
        <h1>Tasks</h1>
        <li>
          <a className={ACTIVE_CLASSNAMES} href="/tasks">All tasks</a>
        </li>
        <li>
          <a className={INACTIVE_CLASSNAMES} href="/tasks/new">New task</a>
        </li>
        <h1>Projects</h1>
        <li>
          <a className={INACTIVE_CLASSNAMES} href="/projects">All projects</a>
        </li>
      </ul>
    );
}
