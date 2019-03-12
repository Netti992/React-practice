import React from 'react';
import './App.css';
import axios from 'axios';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  render () {
    const todos = this.state.todos.map(todo => <TodoItem item={{ name: 'KULONC', message: 'IZE' }} key={todo.id} />);
    console.log(todos);
    return (
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoList;
