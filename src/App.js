import React, { Component } from "react"
import ForecastCard from './components/forecast/ForecastCard'
import "./styles/styles.css"
import {
  weatherSampleSelector,
  getCityName,
  getCityLat,
  getCityLon,
  lvlWeather } from './redux/forecast/forecast.selectors'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// import { bindActionCreators } from "redux";
// import { fetchWeather } from "../actions/actionCreators";
// import { PropagateLoader } from "react-spinners";




class App extends Component {
	render() {
   return (
      <div className="todo-app">
        <ForecastCard 
          city={this.props.city}
          forecast={this.props.forecast}
          data={this.props.data}
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
  const data = state.forecast
  const weather = lvlWeather(state)
  return { city, forecast, data, weather }
}


// function mapDispatchToProps(dispatch) {
//   // object destructuring: {fetchUsers (prop): fetchUsers (action creator)}
//   return bindActionCreators({ fetchWeather }, dispatch);
// }

export default connect(mapStateToProps)(App)


//optionally:

// const enhance = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );
// const AppWithRedux = enhance(App);

// export { App, AppWithRedux };

