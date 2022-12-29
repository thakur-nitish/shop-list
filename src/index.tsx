import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "../src/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
