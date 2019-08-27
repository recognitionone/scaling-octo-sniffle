import React, { Component } from "react"
import ForecastCard from './components/forecast/ForecastCard'
import "./styles/styles.css"
import {
  weatherSampleSelector,
  getCityName,
  getCityLat,
  getCityLon } from './redux/forecast/forecast.selectors'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class App extends Component {
	render() {
   return (
      <div className="todo-app">
        <ForecastCard 
          city={this.props.city}
          forecast={this.props.forecast}
        />
      </div>
    );
	}
}

App.propTypes = {
  city: PropTypes.object.isRequired,
  forecast: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  const cityName = getCityName(state)
  const cityLat = getCityLat(state)
  const cityLon = getCityLon(state)
  const forecast = weatherSampleSelector(state)
  const city = { cityName, cityLat, cityLon }
  
  return { city, forecast }
}

export default connect(mapStateToProps)(App)
