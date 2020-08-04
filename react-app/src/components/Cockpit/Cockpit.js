import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request
    setTimeout(() => {
      alert('Saved data to cloud');
    },1000)
  },[props.persons]); // runs whenever persons changes

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request
    setTimeout(() => {
      alert('Only once!');
    },1000)
  },[]); // runs only at the first render

  const assingedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
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
      <h1>{props.title}</h1>
      <p className={assingedClasses.join(' ')}>This is realy working</p>
      <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default Cockpit;