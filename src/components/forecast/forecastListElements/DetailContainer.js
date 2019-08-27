import React, { Component } from 'react'
import DetailElement from './DetailElement'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'


class DetailContainer extends Component {
  render() {
    const wantedElements = [
      'temp',
      'temp_min',
      'temp_max',
      'pressure',
      'humidity']

    const weatherArr = []

    for (const [key, value] of Object.entries(this.props.value)) {
      if (wantedElements.indexOf(key) > -1) {
        weatherArr.push(<DetailElement
          key={key}
          elementKey={key}
          value={value} />)
      }
    }

    return (
      <List component="div" disablePadding>
        { weatherArr }
      </List>
    )
  }
}

DetailContainer.propTypes = {
  value: PropTypes.object.isRequired,
}

export default DetailContainer
