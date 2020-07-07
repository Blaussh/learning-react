import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>This is realy working</p>
        <button>Switch Name</button>
        <Person name="Max" age="28"/>
        <Person name="Menu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a different react app'));
  }
}

export default App;
