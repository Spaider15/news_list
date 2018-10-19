import {newsAPI, apiKey} from "../../constats";

interface IParams extends IFetchParams, IActionParams {}
export function makeFetch<T>(params: IParams): Promise<T> {
    const { method } = params;
    let url = newsAPI + params.url;
    const headers = {
        "Accept": "application/json"
    };
    const opts: RequestInit = {
        method: method ? method : "POST",
        headers,
    };
    if (params.query) {
        const queryString = Object.keys(params.query).reduce<string[]>( (qsString, key) => {
            qsString.push(`${encodeURIComponent(key)}=${params.query ? encodeURIComponent(params.query[key]) : null}`);
            return qsString;
        }, [] );
        if (apiKey) {
            queryString.push(`apiKey=${apiKey}`)
        }
        url += "?" + queryString.join("&");
    }
    return fetch(url, opts)
        .then((result) => {
            return result.json();
        })
        .catch((error) => {
            return {
                error: error.message,
            };
        });
}
