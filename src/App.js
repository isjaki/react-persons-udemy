import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {   
  state = {
    persons: [
      { name: 'Alex', age: 22 },
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Aleksei';

    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Max', age: 28 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Alex', age: 22 },
        { name: event.target.value, age: 28 },
        { name: 'Stephanie', age: 26 }
      ],
      showPersons: false
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons ? 
            <div>
              <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Lyoha!') /*better use this way, with bind*/}
                changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
              <Person 
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} 
              />
            </div> : null
        }
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;
