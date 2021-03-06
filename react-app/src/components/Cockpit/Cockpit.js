import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request
    // const timer = setTimeout(() => {
    //   alert('Only once!');
    // }, 1000)
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
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
  if (props.personsLength <= 2) {
    assingedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assingedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assingedClasses.join(' ')}>This is realy working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
       <button onClick={authContext.login}>Log In</button>
    </div>
  );
}

export default React.memo(Cockpit);