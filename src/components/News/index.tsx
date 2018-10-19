import * as React from "react";
import {Container, Header, Image, Transition, Visibility} from "semantic-ui-react";

interface IProps {
    news: INews
}

interface IState {
    visible: boolean;
}

export class News extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    public render() {
        const news = this.props.news;
        return (
          <Visibility onOnScreen={this.onVisible} fireOnMount>
            <Transition visible={this.state.visible} animation="swing down" duration={500}>
                <Container>
                    <Header as="h2">{news.title}</Header>
                    <Image src={news.urlToImage} />
                    <p>{news.content}</p>
                    <a href={news.url}>{news.url}</a>
                </Container>
            </Transition>
          </Visibility>
        )
    }

    private onVisible = () => {
        this.setState({visible: true});
    }
}