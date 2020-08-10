import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: '4324rredsfg', name: 'Max', age: 28 },
        { id: 'vcxt4er', name: 'Menu', age: 29 },
        { id: '543gfvcx', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other state',
      showPersons: false,
      showCockpit: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }    

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
        <WithClass classes={classes.App}>
          <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
          {
            this.state.showCockpit ? 
            <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length} 
          clicked={this.togglePersonsHandler}/> : null}
          {persons}
        </WithClass>
    );
  }
}

export default App;
