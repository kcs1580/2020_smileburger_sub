import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./modules";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(reducers);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
