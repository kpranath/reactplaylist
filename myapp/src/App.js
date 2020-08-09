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

  addNinja = (ninja) => {
    // console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Welcome</h3>
        <AddNinjas addNinja={this.addNinja} />
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
