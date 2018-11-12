import React from "react";
import ReactDOM from "react-dom";
// import QuizContainer from "./react/QuizContainer";
// import * as data from "../data/data.json";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import QuizContainer from "./redux/containers/QuizContainer";
import rootReducer from "./redux/reducers";

// using react only build
// ReactDOM.render(<QuizContainer data={data.default} />, document.getElementById("root"));

// using react-redux build
const store = createStore(rootReducer, devToolsEnhancer());
ReactDOM.render(
    <Provider store={store}>
        <QuizContainer />
    </Provider>,
    document.getElementById("root")
);
