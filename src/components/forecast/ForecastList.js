import React, { Component } from 'react'
import ForecastListElement from './forecastListElements/ForecastListElement'
import PropTypes from 'prop-types'


class ForecastList extends Component {
  render() {
    const daysArr = []

    for (const [key, value] of Object.entries(this.props.forecast)) {
      if (key.toLowerCase().includes(this.props.searchInput.toLowerCase())) {
        daysArr.push(
          <ForecastListElement 
            key={key} 
            value={value}
            />)
      }
    }

    return (
      <div className='listItem'>
        {daysArr}
      </div>
    );
  }
}

ForecastList.propTypes = {
  forecast: PropTypes.object.isRequired,
  searchInput: PropTypes.string.isRequired,
}

export default ForecastList
