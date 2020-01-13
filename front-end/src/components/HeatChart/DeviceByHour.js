import React from "react";
import { connect } from "react-redux";
import { getDataHeatChart } from "../../actions/index";
import HeatChart from "./HeatChart";
import SumaryChart from "./SumaryChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GradientLine.css";
import HeatChartSpinner from "../Spinners/HeatChartSpinner";

class DeviceByHour extends React.Component {
  componentDidMount() {
    this.props.getDataHeatChart();
  }
  render() {
    return (
      <div>
        <h3>Device by hour</h3>
        <HeatChartSpinner />
        <div className="row">
          
          <div className="col-md-8" style={{ padding: "0" }}>
            <HeatChart />
            <div className="note"></div>
            <div className="row">
              <div className="col">0</div>
              <div className="col">15</div>
              <div className="col">30</div>
              <div className="col" className="note-late">50</div>
            </div>
          </div>
          <div className="col-md-4" style={{ padding: "0" }}>
            <SumaryChart />
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getDataHeatChart: () => dispatch(getDataHeatChart())
  };
}

export default connect(null, mapDispatchToProps)(DeviceByHour);
