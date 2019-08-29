import React, { Component } from "react";
import PropTypes from "prop-types";


// TODO: replace react-tooltip with crosshair tooltip from vx or data-ui

class Chart extends Component {

  render() {
    const { title, data, color, backgroundColor, tooltipId } = this.props;
    const values = data.map(d => d.value);
    // const dataTip = `${min(values)}; ${max(values)}`;

    return (
      <div
        style={{ position: "relative" }}
        onlyEvent
        onResize={this.handleResize}
        
        data-for={tooltipId}
      >
      </div>
    );
  }
}





Chart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  tooltipId: PropTypes.string.isRequired
};

export default Chart;
