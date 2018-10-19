import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as Actions from "../Actions";
import {Main} from "../../components/Main";

interface IProps {
    getNews(filter: INewsFilter): void;
}

export const defaultFilter: INewsFilter = { country: "ru", category: "health" };

class MainContainer extends React.Component<IProps, {}> {
    public componentDidMount() {
        this.props.getNews(defaultFilter);
    }
    public render() {
        return(
            <Main updateNews={this.props.getNews}/>
        )
    }
}

function mapDispatchToProps(dispatch: Dispatch<Actions.ISetNewsAction | Actions.ISetNewsFilter>) {
    return {
        getNews: (filter: INewsFilter) => {
            dispatch(Actions.setNewsFilter(filter));
            dispatch(Actions.getNews({ query: filter }))
        }
    }
}

export default connect<{}, IProps, {}, IStore>(null, mapDispatchToProps)(MainContainer);

