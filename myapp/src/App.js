import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinjas from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: "Pranath", age: 22, belt: "Black", id: 1 },
      { name: "Lakshya", age: 23, belt: "Yellow", id: 2 },
      { name: "Sidharth", age: 21, belt: "Brown", id: 3 },
      { name: "Shamanth", age: 19, belt: "Blue", id: 4 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h3>Welcome</h3>
        <AddNinjas />
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
