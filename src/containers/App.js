import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Scroll from "../components/Scroll";
import Searchbox from '../components/Searchbox';
import ErrorBoundary from "../components/ErrorBoundaries";
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json()
        }).then(users => {
            this.setState({ robots: users })
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className="tc" >
                    <h1 className="f1">ROBO  FRIENDS</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}
export default App;