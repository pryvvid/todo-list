import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import { newTodo } from '../reducers/reducer';

class AddTodo extends Component {
  constructor(props) {
    super(props);

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
    const { newTodo } = this.props;
    e.preventDefault();
    newTodo(this.state);
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

AddTodo.propTypes = {
  newTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {
  newTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo); 