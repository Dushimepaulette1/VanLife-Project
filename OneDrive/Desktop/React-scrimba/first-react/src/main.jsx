import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Jokes } from "./jokes";
import { Pads } from "./index";
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    {/* <Jokes /> */}
    <Pads />
  </>
);
