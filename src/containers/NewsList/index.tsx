import * as React from "react";
import { connect } from "react-redux";
import {NewsList} from "../../components/NewsList";
import {Loader} from "semantic-ui-react";

interface IProps {
    news: INewsStore
}

class NewsListContainer extends React.Component<IProps, {}> {
    public render() {
        if (this.props.news.loading) {
            return(
                <Loader active>Загрузка...</Loader>
            )
        } else {
            return(
                <NewsList {...this.props.news}/>
            )
        }
    }
}

function mapStateToProps(state: IStore) {
    return {
        news: { ...state.news }
    }
}
export default connect<IProps, {}, {}, IStore>(mapStateToProps)(NewsListContainer);