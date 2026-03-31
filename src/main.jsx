import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/Router";
import { AppProvider } from "./context/AppContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <AppRouter />
  </AppProvider>
);