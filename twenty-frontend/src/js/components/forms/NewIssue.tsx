import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Select } from "/components/forms/Select";
import { useCreateIssue } from "/hooks/useCreateIssue";
import { useConnections } from "/hooks/useConnections";

type Inputs = {
  title: string;
  content: string;
  connectionId: number;
};

export function NewIssue() {
  const { register, handleSubmit, setValue: set } = useForm<Inputs>();
  const selectRef = useRef<HTMLSelectElement>(null);
  const [create] = useCreateIssue();
  const [connections] = useConnections();
  const onSave = (input: Inputs) => {
    create({ input }).then(() => {
      location.href = "/issues/";
    });
  };

  useEffect(() => {
    set("connectionId", 1);
  }, []);

  return (
    <form className="new-issue pure-form" onSubmit={handleSubmit(onSave)}>
      <div className="pure-u-1-1">
        <div className="left">
          <Select {...register("connectionId")} ref={selectRef}>
            {connections.map((conn, key) => {
              return (
                <option key={key} value={conn.id}>
                  {conn.name}
                </option>
              );
            })}
          </Select>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
          />
        </div>
      </div>
      <div className="pure-u-1-1 issue-content">
        <div className="left" />
        <div className="right">
          <textarea
            placeholder="Add your description here"
            {...register("content", { required: true })}
          />
        </div>
      </div>
      <div className="pure-u-1-1">
        <div className="left" />
        <div className="right">
          <input
            className="pure-button pure-button-primary"
            type="submit"
            value="Save"
          />
        </div>
      </div>
    </form>
  );
}
