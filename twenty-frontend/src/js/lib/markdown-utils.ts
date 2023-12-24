import showdown from "showdown";

const DEFAULT_RENDER_OPTIONS = {
  simpleLineBreaks: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tables: true,
  tasklists: true,
};

export function rendermd(str: string, options = {}) {
  const renderer = new showdown.Converter(
    Object.assign({}, DEFAULT_RENDER_OPTIONS, options),
  );
  return renderer.makeHtml(str);
}
