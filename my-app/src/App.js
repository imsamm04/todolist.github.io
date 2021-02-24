import React, { Component } from 'react';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
     { title: 'c1', isComplete: true},
		 { title: 'c2'},
		 { title: 'c3'},
     { title: 'c3'},
    ];
  }
  render() {
    return (
      <div className="App">
				{this.todoItems.length > 0 && this.todoItems.map((item, index)=><TodoItem key={index} item={item}/>)}
        {this.todoItems.length === 0 && 'nothing here'}
      </div>
    );
  }
}

export default App;
