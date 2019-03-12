import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Wrapper from './Wrapper';
import AddTodo from './AddTodo';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { todos: [] };
    this.getTodos = this.getTodos.bind(this);
    console.log('Itt konstruálódok');
  }

  getTodos () {
    axios.get('http://192.168.5.123:5000/tasks').then(response => {
      this.setState({ todos: response.data });
    });
  }

  componentDidMount () {
    this.getTodos();
  }

  render () {
    return (
      <div>
        <h1>Todos</h1>
        <Wrapper>
          <TodoList todos={this.state.todos} />
          <AddTodo />
        </Wrapper>
      </div>
    );
  }
}

export default App;
