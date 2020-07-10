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

  switchNameHandler = (newName) => {
    // console.log('was Clicked!');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Menu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>This is realy working</p>
        <button style={style} onClick={() => this.switchNameHandler('Yosyos')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          click={this.switchNameHandler.bind(this, 'Kakaboon')}
          name={this.state.persons[1].name} age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a different react app'));
  }
}

export default App;
