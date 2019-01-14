import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import QuizContainer from "./redux/containers/QuizContainer";
import rootReducer from "./redux/reducers";

// using react-redux build
const store = createStore(rootReducer, devToolsEnhancer());
ReactDOM.render(
    <Provider store={store}>
        <QuizContainer />
    </Provider>,
    document.getElementById("root")
);
