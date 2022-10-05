import { combineReducers, legacy_createStore as createStore } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({ todos });
const store = createStore(rootReducer);

export default store;
