import React from 'react';
import Axios from 'axios';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  toggleCheck () {
    this.setState({ checked: !this.state.checked });
  }

  delete () {
    Axios.delete('http://localhost:8000/tasks/${this.props.todo.id}').then(res => {
      this.props.getTodos();
    });
  }

  render () {
    return (
      <div>
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.message}</p>
        <button onClick={this.toggleCheck.bind(this)}>{this.state.checked ? 'Checked' : 'Check'}</button>
        <button onClick={this.delete.bind(this)}>Delete</button>
      </div>
    );
  }
}

export default TodoItem;
