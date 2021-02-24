import React, { Component } from 'react';
import './TodoItem.css';
class TodoItem extends Component {
  render() {
    const {item} = this.props;
    let className = 'TodoItem';
    if (item.isComplete) {
        className += ' TodoItem-complete';
    } 
    return (
      <div className={className}>
          <h3>{this.props.item.title}</h3>
      </div>
    );
  }
}

export default TodoItem;
