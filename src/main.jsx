import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

//import BrowserRouter dari react router
import { BrowserRouter, Routes } from "react-router-dom";
import RoutesIndex from "./routes/RoutesIndex";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
