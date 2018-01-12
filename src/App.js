import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: '26' },
      { name: 'Manu', age: '30' },
      { name: 'Stephanie', age: '26' }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: '26' },
        { name: "Ugh", age: '30' },
        { name: 'Stephanie', age: '26' }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Max", age: '26' },
        { name: event.target.value, age: '30' },
        { name: "Stephanie", age: '26' }
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    let persons = null 

    if ( this.state.showPersons ) {
      persons = (
        <div>
        { this.state.persons.map(person => {
           return <Person name={person.name} age={person.age} />
        })}
        </div>
      )
      style.backgroundColor = 'red';    
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>     
      {persons} 
    </div>
    );
  }
}

export default Radium(App);
