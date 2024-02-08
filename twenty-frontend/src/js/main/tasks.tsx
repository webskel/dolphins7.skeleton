import ReactDOM from "react-dom/client";
import { App } from "/components/App";
import { Tasks } from "/components/Tasks";

(function () {
  const root = document.querySelector(".react-root")!;
  ReactDOM.createRoot(root).render(
    <App>
      <Tasks />
    </App>,
  );
})();
