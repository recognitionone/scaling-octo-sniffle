import React, { Component } from 'react'
import ForecastListElement from './forecastListElements/ForecastListElement'
import PropTypes from 'prop-types'
import Weather from './weather/Weather'


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

    const weatherArr = []
    const data = this.props.data

  


    Object.entries(data).map(d => {
        // console.log(d)
        weatherArr.push( <Weather d={d} city={d} list={d.list} key={d.cod} />)
        // weatherArr.push( <Weather d={d} city={d.city} list={d.list} key={d.city.id} />)
          })

    return (
      <div className='listItem'>
        {daysArr}
        <div>
          <Weather city={this.props.data} list={this.props.data.list}/>
        </div>
      </div>
    );
  }
}

ForecastList.propTypes = {
  forecast: PropTypes.object.isRequired,
  searchInput: PropTypes.string.isRequired,
}

export default ForecastList
