import { select, take, put, call, takeEvery } from "redux-saga/effects";
import * as Actions from "../Actions";
import { makeFetch } from "./Fetch";
import {handleGetNews} from "./News";

function* handleRequest(action: Actions.IRequestAction) {
    try {
        yield  put({ type: action.payload.type + Actions.LOADING });
        const response = yield call(makeFetch, action.payload.payload);
        if (!response.error) {
            yield put({ payload: response, type: action.payload.type });
        } else {
            yield put({ payload: response.error.message, type: action.payload.type + Actions.ERROR });
        }
    } catch (e) {
        yield put({ payload: e, type: action.payload.type + Actions.ERROR });
    }
}

function* watchAndLog() {
    while (true) {
        const action = yield take("*");
        const state = yield select();
        console.groupCollapsed("ACTION", action.type);
        console.log("action", action);
        console.log("state after", state);
        console.groupEnd();
    }
}

export default (withLogs: boolean) => {
    return function* mySaga() {
        yield takeEvery(Actions.GET_NEWS, handleGetNews);
        yield takeEvery(Actions.REQUEST, handleRequest);
        if (withLogs) {
            yield watchAndLog();
        }
    };
};
