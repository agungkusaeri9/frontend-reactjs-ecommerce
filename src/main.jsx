import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

//import BrowserRouter dari react router
import { BrowserRouter, Routes } from "react-router-dom";
import RoutesIndex from "./routes/RoutesIndex";
import NavbarComponent from "./components/NavbarComponent";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent></NavbarComponent>
        <RoutesIndex />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes />
//     </BrowserRouter>
//   </React.StrictMode>
// );
