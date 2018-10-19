import { createAction, Action } from "redux-actions";

export function createRequestAction(type: string, requestParams: IFetchParams) {
    return (actionParams: IActionParams = {}) => {
        return createAction(REQUEST)(createAction(type)({ ...requestParams, ...actionParams }));
    };
}

export interface IRequestAction {
    type: string;
    payload: IRequestPayload;
}
interface IRequestPayload {
    type: string;
    payload: IFetchParams;
}

export const REQUEST = "REQUEST";
export const LOADING = "_LOADING";
export const ERROR = "_ERROR";

export const GET_NEWS = "GET_NEWS";
export const SET_NEWS_FILTER = "SET_NEWS_FILTER";
export const SET_NEWS = "SET_NEWS";
export const GET_NEWS_LOADING = "GET_NEWS_LOADING";
export const GET_NEWS_ERROR = "GET_NEWS_ERROR";

export const getNews = createRequestAction(GET_NEWS, { url: "/top-headlines", method: "GET" });

export const setNewsAction = createAction<INews[]>(SET_NEWS);
export const setNewsError = createAction<string>(GET_NEWS_ERROR);
export const setNewsFilter = createAction<INewsFilter>(SET_NEWS_FILTER);
export const setNewsLoading = createAction(GET_NEWS_LOADING);

export type newsPayload = INews[] | string | INewsFilter

export type ISetNewsAction = Action<INews[]>
export type ISetError = Action<string>;
export type ISetNewsFilter = Action<INewsFilter>;