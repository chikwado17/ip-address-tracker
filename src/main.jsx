import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import IpContextProvider from "./context/IpContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IpContextProvider>
      <App />
    </IpContextProvider>
  </React.StrictMode>
);
