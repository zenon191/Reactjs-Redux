import React from 'react';
import LineChart from './LineChart';
import { getDataLineChart } from '../../actions';
import { connect } from 'react-redux';
import LineChartSpinner from '../Spinners/LineChartSpinner';

class Device extends React.Component{
  componentDidMount(){
    this.props.getDataLineChart()
  }
  render() {
    return (
      <div>
        <h3>Device</h3>
        <LineChartSpinner />
        <LineChart/>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    getDataLineChart: (startDate, endDate) => {dispatch(getDataLineChart(startDate, endDate))}
  }
}
export default connect(null, mapDispatchToProps)(Device);