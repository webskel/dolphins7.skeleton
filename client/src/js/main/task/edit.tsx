import ReactDOM from "react-dom/client";
import { App } from "~/components/App";
import { Task } from "~/components/Task";

(function () {
  const root = document.querySelector(".react-root")!;
  ReactDOM.createRoot(root).render(
    <App>
      <Task />
    </App>,
  );
})();
