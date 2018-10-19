import * as React from "react";
import {List, Header, Transition, Visibility} from "semantic-ui-react";
import {NewsItem} from "./NewsItem";


interface IProps {
    data: INews[];
    error?: string;
    filter: INewsFilter;
}

interface IState {
    visible: boolean;
}

export class NewsList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            visible: false
        }
    }

    public render() {
        const { data, filter } = this.props;
        const news = data.map( (n, i) => <NewsItem key={i} id={i} news={n}/> );
        return(
            <Visibility onOnScreen={this.onVisible} fireOnMount>
                <Transition visible={this.state.visible} animation="browse" duration={500}>
                    <List divided relaxed verticalAlign="middle">
                        <Header as="h2" textAlign="center">
                            News from {filter.country.toUpperCase()} and {filter.category.toUpperCase()} category
                        </Header>
                        {news}
                    </List>
                </Transition>
            </Visibility>
        )
    }

    private onVisible = () => {
        this.setState({visible: true});
    }
}