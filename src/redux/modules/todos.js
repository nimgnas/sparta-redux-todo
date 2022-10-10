const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

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

const initialState = [];

export default function todos(state = initialState, { type, id, todo }) {
  switch (type) {
    case ADD_TODO:
      return state.concat(todo);
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
}
