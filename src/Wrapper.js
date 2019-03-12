import React from 'react';

class Wrapper extends React.Component {
  render () {
    return (
      <div>
        <h1>
            TodoApp
        </h1>
        {this.props.children};
      </div>
    );
  }
}

export default Wrapper;
