import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextContextProvider } from "./contex/newCopntext.jsx";

createRoot(document.getElementById("root")).render(
  <NextContextProvider>
    <App />
  </NextContextProvider>
);
