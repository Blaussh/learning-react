import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request
    const timer = setTimeout(() => {
      alert('Only once!');
    }, 1000)
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []); // runs only at the first render

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  }, [props.persons]); // runs whenever persons changes


  useEffect(() => {
    console.log('[Cockpit.js] 3rd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 3rd useEffect');
    }
  }); // runs on every render.


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