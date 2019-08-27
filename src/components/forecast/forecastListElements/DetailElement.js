import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


class DetailElement extends Component {
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
  const text = `${this.props.elementKey} : ${this.props.value}`
  return (
      <ListItem button >
        <ListItemText primary={text} className='nested'/>
      </ListItem>
    )
  }
}

DetailElement.propTypes = {
  elementKey: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default DetailElement
