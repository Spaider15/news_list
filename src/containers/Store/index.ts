import { createStore, Store, applyMiddleware  } from "redux";
import Reducer from "../Reducers";
import createSageMiddleware from "redux-saga";
import Saga from "../Sagas";

const sagaMiddleware = createSageMiddleware();

let store: Store<IStore>;
export default function() {
    if (!store) {
        store = createStore<IStore, any, any, any>(Reducer, applyMiddleware(sagaMiddleware));
        sagaMiddleware.run(Saga(true));
    }
    return store;
}
