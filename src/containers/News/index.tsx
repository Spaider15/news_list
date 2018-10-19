import * as React from "react";
import { Container, Loader, Header } from "semantic-ui-react";
import {Link, RouteComponentProps} from "react-router-dom";
import {connect} from "react-redux";
import {News} from "../../components/News";

interface IProps extends IOwnProps, IStateToProps {}

interface IStateToProps {
    news: INewsStore;
}

interface IOwnProps extends RouteComponentProps<{id: string}> {}

export class NewsContainer extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { loading, data } = this.props.news;
        const { id } = this.props.match.params;
        if (data.length < 1 || loading) {
            return (
                <Loader active>Загрузка...</Loader>
            )
        } else if (data[id]) {
            return(
                <News news={data[id]}/>
            )
        } else {
            return(
                <Container>
                    <Header>Новость не существует</Header>
                    <Link to="/">Вернуться на главную страницу</Link>
                </Container>
            )
        }
    }
}

function mapStateToProps(state: IStore) {
    return {
        news: { ...state.news }
    }
}

export default connect<IStateToProps, IOwnProps, IStore>(mapStateToProps)(NewsContainer)