import {put} from "redux-saga/effects";
import {setNewsError, setNewsAction} from "../Actions";

interface IAPIResponse {
    status: string
    totalResults: number;
    articles: INews[];
    message: string;
}

export function* handleGetNews(action: { type: string, payload: IAPIResponse }) {
    const response = action.payload;
    if (response.status === "ok") {
        yield put(setNewsAction(response.articles))
    } else {
        yield put( setNewsError(response.message) )
    }
}