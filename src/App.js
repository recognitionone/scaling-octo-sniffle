import React, { Component } from "react"
// import AddTodo from "./components/todolist/AddTodo"
// import TodoList from "./components/todolist/TodoList"
// import VisibilityFilters from "./components/todolist/VisibilityFilters"
import Forecast from './components/forecast/Forecast'
import "./styles/styles.css"
import { forecastSampleSelector } from './redux/forecast/forecast.selectors'
import { connect } from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      componentForecast: null,
    }
  }
 
  componentDidUpdate() {
    this.setState({ componentForecast: this.props.forecast })
  }

	render() {
   return (
      <div className="todo-app">
        <Forecast forecast={this.state.componentForecast} />
      </div>
    );
	}
}

const mapStateToProps = (state) => {
	const forecast = forecastSampleSelector(state)
	return { forecast }
}

export default connect(mapStateToProps)(App)
