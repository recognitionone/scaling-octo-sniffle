import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecastList from './ForecastList'
import ForecastLocation from './ForecastLocation'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


class ForecastCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    }

    this.handleSearchInput = (e) => {
      this.setState({ searchInput: e.target.value })
    }
  }


  render() {
    return (
    <Card className='card'>
      <CardContent>
        <ForecastLocation
          city = {this.props.city} />
        <ForecastList
          searchInput = {this.state.searchInput}
          forecast = {this.props.forecast} />
      </CardContent>
    </Card>
    )
  }
}

ForecastCard.propTypes = {
  city: PropTypes.object.isRequired,
  forecast: PropTypes.object.isRequired,
}

export default ForecastCard

