import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("appRoot"));
root.render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/", sameSite: "lax" }}>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
