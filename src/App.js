import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: '26' },
      { name: 'Manu', age: '30' },
      { name: 'Stephanie', age: '26' }
    ],
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
   const persons = this.state.persons;
   persons.splice(personIndex, 1);
   this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {

    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
        { this.state.persons.map((person, index) => {
           return <ErrorBoundary><Person click={() => this.deletePersonHandler(index)}
           name={person.name} 
           age={person.age} 
           changed={this.nameChangedHandler} />
           </ ErrorBoundary>
        })}
        </div>
      )
      // style.backgroundColor = 'white';
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
            <button className={'Red'} onClick={this.togglePersonsHandler}>Switch Name</button>     
          {persons} 
        </div>
    );
  }
}

export default App;
