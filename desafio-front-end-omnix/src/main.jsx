import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import "./index.css";
import MainRoutes from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
