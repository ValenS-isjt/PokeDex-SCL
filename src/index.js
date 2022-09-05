import { createRoot } from "react-dom/client";
import "./assets/styles/global-style.css";
import { App } from "./components/App";

const root = createRoot(document.getElementById("cavani-no-va-a-boca"));

root.render(<App />);
