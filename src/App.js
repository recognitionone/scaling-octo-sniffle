import React from "react"
import AddTodo from "./components/todolist/AddTodo"
import TodoList from "./components/todolist/TodoList"
import VisibilityFilters from "./components/todolist/VisibilityFilters"
import Forecast from './components/forecast/Forecast'
import "./styles/styles.css"
import { forecastSampleSelector } from './redux/forecast/forecast.selectors'
import { connect } from 'react-redux'


function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
      <Forecast />
    </div>
  );
}

const mapStateToProps = (state) => {
	const forecast = forecastSampleSelector(state)
	return { forecast }
}

export default connect(mapStateToProps)(App)
