import { ActionType } from "../actions/action-types";
import { call, put, takeLeading, all } from "redux-saga/effects";
import axios from "axios";

function* addUsersSaga() {
    console.log("Add users saga");
    const response = yield call(
        axios.get,
        `https://randomuser.me/api/?nat=nl&results=20&inc=name,email,picture,login`
    );
    const users = response.data.results;
    yield put({ type: ActionType.ADD_USERS, users });
}

function* watchScrollSaga() {
    console.log("Infinite scroll saga");
    yield takeLeading(ActionType.INFINITE_SCROLL, addUsersSaga);
}

function* watchSetUsersSaga() {
    console.log("Initial data saga");
    yield takeLeading(ActionType.INITIAL_USERS, addUsersSaga);
}

export default function* saga() {
    yield all([watchScrollSaga(), watchSetUsersSaga()]);
}
