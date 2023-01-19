import React from "react";

import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "../src/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
Sentry.init({
  dsn: "https://1c93011323664d51bcfcbb1b9fc97dae@o4504450879520768.ingest.sentry.io/4504450881093632",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
render(<App />, document.getElementById("root"));
