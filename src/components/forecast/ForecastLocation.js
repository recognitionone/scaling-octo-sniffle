import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'


class ForecastLocation extends Component {
  render() {
    return (
      <div>
				<Typography variant="h5" component="h2">
          {this.props.city.cityName}
        </Typography>
       
        <Typography className='pos' color="textSecondary">
          lat: {this.props.city.cityLat}, 
          lon: {this.props.city.cityLon}
        </Typography>
      </div>
    )
  }
}

ForecastLocation.propTypes = {
  city: PropTypes.object.isRequired,
}

export default ForecastLocation
