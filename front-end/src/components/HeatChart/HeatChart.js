import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import _ from 'lodash';

class HeatChart extends React.Component {
  render() {
    const getDataHeat = this.props.getDataHeatChart;
    const status = this.props.getDataHeatChart.isLoadingHeat;
    const series = _.reverse(getDataHeat.getDataHeatChart);
    const options = {
      chart: {
        height: 300,
        type: "heatmap",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      
      yaxis: {
          show: false
      },
      colors: ["#6232ca"]
    };
    return (
        !status && (
          <Chart
          options={options}
          series={series}
          type="heatmap"
          height="300"
        />
        )
    );
  }
}
function mapStateToProps(state) {
  return {
    getDataHeatChart: state.getDataHeatChart,
    allData: state.allData
  };
}
export default connect(mapStateToProps, null)(HeatChart);