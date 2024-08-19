import "./App.css";

import { CardList } from "./CardList";
import { robots } from "./Robots";
import { SearchBox } from "./SearchBox";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: robots,
      searchbox: "",
    };
  }
  onSearch = (event) => {
    this.setState({
      searchbox: event.target.value,
    });
    console.log(this.state.searchbox);
  };
  render() {
    const filteredRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchbox.toLowerCase());
    });
    return (
      <div className="App">
        <div className="overall">
          <div className="top">
            <h1>ROBOFRIENDS</h1>
            <SearchBox searchRobots={this.onSearch} />
          </div>
          <div className="dady">
            <CardList robots={filteredRobot} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
