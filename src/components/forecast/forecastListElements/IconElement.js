import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getWeatherIconUrl } from '../../../utils/url'


class IconElement extends Component {
  render() {
  const icon = this.props.icon
  const desc = this.props.description
  const url = getWeatherIconUrl(icon)
  return (
    <img src={url} alt={desc}/>
    )
  }
}

IconElement.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default IconElement
