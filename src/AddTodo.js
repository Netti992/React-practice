import React from 'react';
import axios from 'axios';

class AddTodo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todo: {
        name: 'Todo',
        message: 'Message'
      }
    };
    this.changeField = this.changeField.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeField (name) {
    return (e) => {
      this.state.todo[name] = e.target.value;
      this.setState(this.state);
    };
  }

  submit (e) {
    e.preventDefault();
    axios({
      url: 'http://localhost:8000/tasks',
      method: 'post',
      data: this.state.todo
    }).then(res => {
      console.log(res.data);
      this.props.getTodos();
    });
    console.log('Ok');
  }

  render () {
    return (
      <form>
        <label>Name</label>
        <input type='text' name='name' value={this.state.todo.name} onChange={this.changeField('name')} />
        <label>Message</label>
        <input type='text' name='message' value={this.state.todo.message} onChange={this.changeField('message')} />
        <input type='submit' value='Save' onClick={this.submit} />
      </form>
    );
  }
}

export default AddTodo;
