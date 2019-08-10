import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import App from "./app/App";

ReactDOM.render(
    <AppContainer><App/></AppContainer>,
    document.getElementById("app"),
);

// Hot Module Replacement
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./app/App", () => {
        ReactDOM.render(
            <AppContainer><App/></AppContainer>,
            document.getElementById("app"));
    });
}
