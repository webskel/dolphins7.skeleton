import showdown from "showdown";

const DEFAULT_RENDER_OPTIONS = {
  simpleLineBreaks: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tables: true,
  tasklists: true,
  ghCodeBlocks: true,
  headerLevelStart: 3,
};

export function rendermd(str: string, options = {}) {
  const renderer = new showdown.Converter(
    Object.assign({}, DEFAULT_RENDER_OPTIONS, options),
  );
  return renderer.makeHtml(str);
}
