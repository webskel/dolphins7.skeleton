import React from "react";

export function NewIssueForm() {
  return (
    <form>
      <input name="title" type="text" placeholder="The title of the issue" />
      <button type="submit">Save</button>
    </form>
  );
}
