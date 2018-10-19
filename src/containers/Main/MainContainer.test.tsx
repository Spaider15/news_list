import * as React from "react";
import { Provider } from "react-redux";
import * as Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {initState} from "../Reducers";
import {mount, configure} from "enzyme";
import Main, { defaultFilter } from "./index";
import {REQUEST, GET_NEWS, SET_NEWS_FILTER} from "../Actions";

configure({ adapter: new Adapter() });

describe(">>> MainContainer Test", () => {
    const mockStore = configureStore<IStore>();
    const store = mockStore({ news: initState });
    mount(<Provider store={store}><Main /></Provider>);

    test("when container mounted, then expect dispatch SET_FILTER & GET_NEWS", () => {
        const actions = store.getActions();
        const filterAction = actions[0];
        const action = actions[1];
        expect(filterAction.type).toBe(SET_NEWS_FILTER);
        expect(action.type).toBe(REQUEST);
        expect(action.payload.type).toBe(GET_NEWS);
        expect(action.payload.payload).toEqual({ url: "/top-headlines", method: "GET", query: defaultFilter })
    })
});