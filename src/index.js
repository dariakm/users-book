import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reducer from "./reducers/";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";
import UsersBook from "./components/UsersBook";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    { users: [] },
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <UsersBook />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
