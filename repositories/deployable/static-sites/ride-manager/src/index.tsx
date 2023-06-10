import { render } from "solid-js/web";
import HMR from "./hmr";
import Application from "./application";

HMR();
render(Application, document.getElementById("root")!);