import client from "./auth/client";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Provider as Api } from "urql";

import App from "./App";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Api value={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </Api>
  </React.StrictMode>,
  document.getElementById("root")
);
