import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '4324rredsfg', name: 'Max', age: 28 },
      { id: 'vcxt4er', name: 'Menu', age: 29 },
      { id: '543gfvcx', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other state',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let btnClass = '';

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = classes.Red
    }

    const assingedClasses = [];

    if (this.state.persons.length <= 2) {
      assingedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assingedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, Im a React App</h1>
          <p className={assingedClasses.join(' ')}>This is realy working</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;