import React, { Component } from "react";
import PropTypes from "prop-types";
// import Chart from "./Chart";


class Weather extends Component{
  render() {
  

    return (
      <div>
        <h3>{`${this.props.city.message}, ${this.props.city.cod}`}</h3>
      </div>
    );
  }
}

  




export default Weather;
