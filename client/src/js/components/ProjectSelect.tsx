import { useProjects } from "~/hooks/queries/useProjects";
import { Project, Maybe } from "~/types/schema";
import { Select, Option } from "~/components/Select";

type Props = {
  selected: Maybe<string>;
  onChange: (project: Maybe<Project>) => void;
};

export function ProjectSelect({ onChange, selected }: Props) {
  const { data, loading } = useProjects();
  const projects: Project[] = data?.projects || [];
  const options: Option[] = projects.map(project => ({
    id: project.id,
    label: (
      <div className="flex items-center">
        <span
          style={{ backgroundColor: project.color }}
          className="flex w-2/8 rounded w-8 h-8 mr-3 cursor-pointer"
        ></span>
        <span className="flex">{project.name}</span>
      </div>
    ),
    value: project.name,
  }));

  if (loading) {
    return null;
  }

  return (
    <Select
      onChange={(option: Option) => {
        const project = projects.find(p => p.id == option.id);
        onChange(project);
      }}
      options={options}
      selected={String(selected)}
      placeholder="Any project"
      className="max-h-96 overflow-y-scroll overflow-x-none w-3/4"
    />
  );
  1;
}
