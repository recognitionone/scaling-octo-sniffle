import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'

import DetailContainer from './DetailContainer'
import IconElement from './IconElement'

class ForecastListElement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.handleClick = () => {
      this.setState({ open: !this.state.open })
    }
  }

  render() {
    return (
    <div component="nav" className='root'>
      <ListItem button onClick={this.handleClick}>
        <ListItemIcon>
          
          <IconElement 
            icon={this.props.value.icon} 
            description={this.props.value.description}/>
        </ListItemIcon>
        <ListItemText primary={this.props.value.date} />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <DetailContainer
        value={this.props.value.temp} />
      </Collapse>
      <Divider />
    </div>
    )
  }
}

ForecastListElement.propTypes = {
  value: PropTypes.object.isRequired,
}

export default ForecastListElement
