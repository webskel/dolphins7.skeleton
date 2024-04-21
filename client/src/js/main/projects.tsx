import ReactDOM from "react-dom/client";
import { App } from "~/components/App";
import { Projects } from "~/components/Projects";

(function () {
  const root = document.querySelector(".react-root")!;
  ReactDOM.createRoot(root).render(
    <App>
      <Projects />
    </App>,
  );
})();
