const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const GET_ID = "todos/GET_ID";

let nextId = 1;

export const addTodo = ({ title, body }) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    title,
    body,
    isDone: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
export const getId = (id) => ({
  type: GET_ID,
  id,
});

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case GET_ID:
      return action.id;
    default:
      return state;
  }
}
