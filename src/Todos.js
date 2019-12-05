import React from 'react';

import { connect } from 'react-redux';

import { removeTodo } from './reducer';

const Todos = ({todos, removeTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div 
          className="collection-item" 
          key={todo.id}
          onClick={() => {removeTodo(todo.id)}}
          >
          <span>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">Nothing to do</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {
  removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);