import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React , { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { Provider } from "react-redux";
import "./translate/i18next";

ReactDOM.render(
    <Suspense fallback={(<div>loading ...</div>)}>
        <Provider store={store}>
            <App />
        </Provider>
    </Suspense>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
