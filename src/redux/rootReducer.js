import { combineReducers } from "redux"
import visibilityFilter from "./todolist/reducers/visibilityFilter"
import todos from './todolist/reducers/todos'
import forecast from './forecast/forecast.reducers'


export default combineReducers({ todos, visibilityFilter, forecast });
