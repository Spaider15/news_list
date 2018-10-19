import * as React from "react";
import {ListItem, ListHeader, ListContent} from "semantic-ui-react";
import {Link} from "react-router-dom";

interface IProps {
    news: INews;
    id: number;
}

export class NewsItem extends React.Component<IProps, {}> {
    public render() {
        const {title} = this.props.news;
        const {id} = this.props;
        return (
            <ListItem>
                <ListContent floated="right">
                    <Link to={"/news/" + id}>Read more</Link>
                </ListContent>
                <ListContent>
                    <ListHeader>{title}</ListHeader>
                </ListContent>
            </ListItem>
        )
    }
}