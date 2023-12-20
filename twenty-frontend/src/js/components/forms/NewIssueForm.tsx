import React from "react";
import { ConnectionSelect } from "/components/forms/ConnectionSelect";

export function NewIssueForm() {
  return (
    <form className="form">
      <div className="row">
        <ConnectionSelect/>
        <input name="title" type="text" placeholder="The title of the issue" />
      </div>
      <div className="row content">
        <textarea name="content"/>
      </div>
      <div className="row">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
