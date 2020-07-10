import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Menu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other state'
  }

  switchNameHandler = () => {
    // console.log('was Clicked!');
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Menu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>This is realy working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.switchNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a different react app'));
  }
}

export default App;
