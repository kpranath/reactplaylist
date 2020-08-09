import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: "Pranath", age: 22, belt: "Black", id: 1 },
      { name: "Lakshya", age: 23, belt: "Yellow", id: 2 },
      { name: "Sidharth", age: 21, belt: "Brown", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h3>Welcome</h3>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
