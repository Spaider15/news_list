import { combineReducers } from "redux";
import * as Actions from "../Actions";
import { handleActions } from "redux-actions";

export const initState: INewsStore = {
    data: [],
    error: "",
    loading: false,
    filter: { country: "", category: "" }
};

export const newsReducer = handleActions<INewsStore, Actions.newsPayload>({
    [Actions.SET_NEWS]: (state: INewsStore, action: Actions.ISetNewsAction) => {
        const payload = action.payload;
        if (payload) {
            return { ...state, data: payload, loading: false }
        } else {
            return state;
        }
    },
    [Actions.GET_NEWS_LOADING]: (state: INewsStore) => {
        return { ...state, loading: true }
    },
    [Actions.GET_NEWS_ERROR]: (state: INewsStore, action: Actions.ISetError) => {
        return { ...state, error: action.payload }
    },
    [Actions.SET_NEWS_FILTER]: (state: INewsStore, action: Actions.ISetNewsFilter) => {
        if (action.payload) {
            return { ...state, filter: action.payload }
        } else {
            return state;
        }
    }
}, initState);


export default combineReducers<IStore>({
    news: newsReducer,
})