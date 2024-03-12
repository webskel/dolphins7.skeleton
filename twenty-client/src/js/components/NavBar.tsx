import { useContext } from "react";
import { ParamContext, CookieContext } from "~/Context";
import { Maybe } from "~/types/schema";
import { ProjectSelect } from "~/components/ProjectSelect";
const BASE_CLASSNAMES = ["block", "w-3/4", "no-underline", "p-3", "mt-2"];
const ACTIVE_CLASSNAMES = [
  ...BASE_CLASSNAMES,
  "rounded",
  "bg-secondary",
  "text-primary",
].join(" ");
const INACTIVE_CLASSNAMES = [
  ...BASE_CLASSNAMES,
  "text-accent",
  "hover-bg-secondary",
].join(" ");

type Item = { text: string; href: string };
type Bar = Record<string, Array<Item>>;

const find = (path: string, bar: Bar): Maybe<Item> => {
  let item: Maybe<Item> = null;
  Object.values(bar)
    .flat()
    .forEach(i => {
      if (i.href === path) {
        item = i;
      }
    });
  return item;
};

export function NavBar() {
  const params = useContext(ParamContext);
  const cookies = useContext(CookieContext);
  const bar: Bar = {
    Tasks: [
      { text: "All tasks", href: "/tasks/" },
      { text: "New task", href: "/tasks/new/" },
    ],
    Projects: [{ text: "All projects", href: "/projects" }],
  };
  const activeItem = find(location.pathname, bar);

  return (
    <>
      {...Object.keys(bar).map(key => {
        const items = bar[key];
        return (
          <>
            <h3>{key}</h3>
            <ul>
              {...items.flatMap(item => {
                return (
                  <li>
                    <a
                      className={
                        activeItem == item
                          ? ACTIVE_CLASSNAMES
                          : INACTIVE_CLASSNAMES
                      }
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
      <h3>Scope</h3>
      <ProjectSelect
        selected={params.projectId || cookies.projectId}
        onChange={project => {
          if (project) {
            document.cookie = `projectId=${project.id}; path=/`;
            location.hash = `projectId=${project.id}`;
          } else {
            document.cookie = `projectId=; path=/; max-age=0`;
            location.hash = "";
          }
          location.reload();
        }}
      />
    </>
  );
}
