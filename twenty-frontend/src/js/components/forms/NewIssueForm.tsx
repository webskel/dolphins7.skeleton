import React from "react";
import { ConnectionSelect } from "/components/forms/ConnectionSelect";

export function NewIssueForm() {
  return (
    <>
      <div className="pure-u-1-1">
        <div className="left">
          <ConnectionSelect/>
        </div>
        <div className="right">
          <input name="title" type="text" placeholder="Title" />
        </div>
      </div>
      <div className="pure-u-1-1">
        <div className="left"></div>
        <div className="right">
          <textarea name="content" placeholder="Add your description here"/>
        </div>
      </div>
      <div className="pure-u-1-1">
        <div className="left"></div>
        <div className="right">
          <button className="pure-button pure-button-primary" type="submit">Save</button>
        </div>
      </div>
    </>
  );
}
