import React from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import './App.css';
import Scroll from './scroll';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { robots, search } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <React.Fragment>
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <div className='card-list'>
              <CardList robots={filteredRobots} />
            </div>
          </Scroll>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
