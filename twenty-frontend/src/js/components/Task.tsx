import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Select } from "/components/forms/Select";
import { useUpsertTask } from "/hooks/useUpsertTask";
import { useProjects } from "/hooks/useProjects";
import { Task } from "/types/schema";
import { rendermd } from "/lib/markdown-utils";

type Inputs = {
  id?: number;
  title: string;
  content: string;
  projectId: number;
};

export function Task({ task }: { task?: Task }) {
  const { register, handleSubmit, watch, setValue: set } = useForm<Inputs>();
  const [isEditable, setIsEditable] = useState<boolean>(!task);
  const upsert = useUpsertTask();
  const projects = useProjects();
  const content = watch("content");
  const onSave = (input: Inputs) => {
    upsert({ input }).then(() => {
      location.href = "/tasks/";
    });
  };

  useEffect(() => {
    set("projectId", 1);
  }, []);

  return (
    <form className="task" onSubmit={handleSubmit(onSave)}>
      <input type="hidden" value={task?.id} {...register("id")} />
      <div className="table">
        <div className="table tabbed div">
          <ul className="tabs">
            <li onClick={() => setIsEditable(true)}>Write</li>
            <li onClick={() => setIsEditable(false)}>Preview</li>
          </ul>
        </div>
        <div className="table content">
          <div>
            <Select {...register("projectId")} className="form">
              {projects.map((project, key) => {
                return (
                  <option key={key} value={project.id}>
                    {project.name}
                  </option>
                );
              })}
            </Select>
          </div>
          <div>
            <input
              className="form"
              type="text"
              placeholder="Title"
              defaultValue={task?.title}
              {...register("title", { required: true })}
            />
          </div>
          {isEditable ? (
            <>
              <div className="row textarea">
                <textarea
                  className="form"
                  placeholder="Add your description heren"
                  defaultValue={task?.content}
                  {...register("content", { required: true })}
                />
              </div>
              <div className="row">
                <input className="form" type="submit" value="Save" />
              </div>
            </>
          ) : (
            <div
              className="task content"
              dangerouslySetInnerHTML={{
                __html: rendermd(content || task?.content),
              }}
            />
          )}
        </div>
      </div>
    </form>
  );
}
