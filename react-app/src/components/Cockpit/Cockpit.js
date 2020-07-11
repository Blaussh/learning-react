import React from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) => {
    const assingedClasses = [];
    let btnClass ='';
    if(props.showPersons) {
        btnClass = classes.Red
    }
    if (props.persons.length <= 2) {
      assingedClasses.push(classes.red); 
    }
    if (props.persons.length <= 1) {
      assingedClasses.push(classes.bold); 
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, Im a React App</h1>
            <p className={assingedClasses.join(' ')}>This is realy working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default Cockpit;