import * as React from 'react';
import { Container, Header, GridRow, Grid, Select, Button, DropdownProps, Form } from "semantic-ui-react";
import {
    HashRouter as Router, Route
} from "react-router-dom";
import "./main.css";
import NewsListContainer from "../../containers/NewsList";
import News from "../../containers/News";

interface IProps {
    updateNews(filter: INewsFilter): void;
}

interface IState {
    [key: string]: string | Date | boolean;
    country: string;
    category: string;
    countryError: boolean;
    categoryError: boolean;
    date: Date;
}

const daysOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
const countries = [ { text: "de", value: "de"},  { text: "ru", value: "ru"},  { text: "us", value: "us"}, ];
const categories = [  { text: "business", value: "business"},  { text: "health", value: "health"},  { text: "technology", value: "technology"} ];

export class Main extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            country: "",
            countryError: false,
            category: "",
            categoryError: false,
            date: new Date(),
        }
    }

    public render() {
        const { country, category, date, countryError, categoryError } = this.state;
        return(
          <Router>
              <Container text>
                  <Header textAlign="center">
                      Top news of {daysOfWeek[date.getDay() - 1]} {date.toLocaleDateString()}
                  </Header>
                  <Grid>
                      <GridRow centered className="filter">
                          <Form onSubmit={this.updateNews}>
                              <Select error={countryError} name="country" options={countries} value={country} placeholder="Filter by country" onChange={this.onFilterChange}/>
                              <Select error={categoryError} name="category" options={categories} value={category} placeholder="Filter by category" onChange={this.onFilterChange}/>
                              <Button primary type="submit">GET LIST</Button>
                          </Form>
                      </GridRow>
                  </Grid>
                  <Route exact={true} path="/" key="main" component={NewsListContainer}/>
                  <Route path="/news/:id" key="news" component={News} />
              </Container>
          </Router>
        )
    }

    private onFilterChange = (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        const name = data.name as string;
        const value = data.value as string;
        this.setState({ [name]: value });
    }

    private updateNews = () => {
        const {country, category, categoryError, countryError} = this.state;
        if (!country) {
            return this.setState({ countryError: true })
        } else if (countryError) {
            this.setState({ countryError: false })
        }
        if (!category) {
            return this.setState({categoryError: true})
        } else if (categoryError) {
            this.setState({ categoryError: false })
        }
        this.props.updateNews({ country, category });
        window.location.hash = "/"
    }
}