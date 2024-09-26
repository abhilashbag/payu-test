import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppTest from "./testApp.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppTest />
  </StrictMode>
);
