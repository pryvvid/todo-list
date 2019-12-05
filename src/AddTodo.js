import React, { Component } from 'react';

import { connect } from 'react-redux';

import { newTodo } from './reducer';

class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      content: ''
    }
  }
  

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newTodo(this.state);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new Todo:</label>
          <input onChange={this.handleChange} 
            value={this.state.content} 
            />
          <button 
            className="waves-effect waves-light btn-large" 
            onSubmit={this.handleSubmit}
            >
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {
  newTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo); 