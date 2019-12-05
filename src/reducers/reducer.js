let idCounter = 3;

const initialState = {
  todos: [
    {id: 1, content: 'learn react'},
    {id: 2, content: 'learn redux'}
  ]
};

export const reducer = (state = initialState, action) => {
  let copyTodos = [];

  switch(action.type) {
    case 'NEW_TODO':
      copyTodos = [...state.todos, action.payload];
      return {...state, todos: copyTodos};
    case 'REMOVE_TODO':
      copyTodos = state.todos.filter(todo => {
        return action.payload !== todo.id;
      });
      return {...state, todos: copyTodos};
    default:
      return state;
  }
}

export const newTodo = (payload) => {
  payload.id = idCounter++;
  return {
    type: 'NEW_TODO',
    payload
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: id
  }
}