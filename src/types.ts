interface IFetchParams extends RequestInit {
    url: string;
    method?: string;
    body?: any;
}

interface IActionParams {
    body?: any
    query?: { [key: string]: any }
}

interface IRequest {
    loading?: boolean;
    error?: string;
}

interface IStore {
    news: INewsStore
}

interface INewsStore {
    data: INews[];
    filter: INewsFilter;
    error?: string;
    loading: boolean;
}

interface INewsFilter {
    country: string;
    category: string;
}

interface INews {
    title: string;
    url: string;
    urlToImage: string;
    content: string;
}