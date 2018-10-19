import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './containers/Main';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import Store from "./containers/Store";

const store = Store();

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
