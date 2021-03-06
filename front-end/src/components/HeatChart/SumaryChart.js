import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import _ from "lodash";

const SumaryChart = (props) => {
    const dataHeat = props.getDataHeatChart;
    const status = props.getDataHeatChart.isLoadingHeat;
    const list = dataHeat.getDataHeatChart.map(e => e.data.map(a => a.y));
    const series = [
      {
        data: list.map((e, index) => _.sum(list[index]))
      }
    ];
    const options = {
      chart: {
        type: "bar",
        height: 260,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "100%"
        }
      },
      dataLabels: {
        enabled: true
      },
      colors: ["#589e71"],
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          offsetY: 3,
          style: {
            fontSize: "13px"
          }
        }
      }
    };
    return (
      !status && (
        <div style={{ width: "200px" }}>
          <Chart options={options} series={series} type="bar" height="260" />
        </div>
      )
    );
}
function mapStateToProps(state) {
  return {
    getDataHeatChart: state.getDataHeatChart
  };
}

export default connect(mapStateToProps, null)(SumaryChart);
