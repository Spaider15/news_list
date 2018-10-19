import {initState, newsReducer} from "./index";
import {setNewsLoading, setNewsAction, setNewsFilter, setNewsError} from "../Actions";


describe(">>> NewsReducer Test", () => {
    test("Test set loading action", () => {
        const stateWithLoading = {...initState, loading: true};
        expect(stateWithLoading).toEqual(newsReducer(initState, setNewsLoading()))
    });
    test("Test set news action", () => {
        const news: INews = {
            title: "title",
            url: "url",
            urlToImage: "urlToImage",
            content: "content"
        };
        const stateWithNews = {...initState, data: [news]};
        expect(stateWithNews).toEqual(newsReducer(initState, setNewsAction([news])))
    });
    test("Test set news filter action", () => {
        const filter: INewsFilter = {
            category: "business",
            country: "ru"
        };
        const stateWithFilter = { ...initState, filter };
        expect(stateWithFilter).toEqual(newsReducer(initState, setNewsFilter(filter)))
    });
    test("Test set news error action", () => {
        const error = "error";
        const stateWithError = { ...initState, error };
        expect(stateWithError).toEqual(newsReducer(initState, setNewsError(error)))
    })
});