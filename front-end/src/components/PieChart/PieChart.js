import React from "react";
import { VictoryPie, VictoryLegend } from "victory";
import { connect } from "react-redux";
import { PieChartLegend } from "./PieChartLegend";
import ChooseDevice from "./ChooseDevice";

class PieChart extends React.Component {
  render() {
    console.log(this.props)
    const { data } = this.props.data;
    const status = this.props.data.isLoading;
    return (
      !status && (
        <div>
          <ChooseDevice data={data} />
          <svg viewBox="0 30 1400 700" width="700" height="700">
            <VictoryPie
              standalone={false}
              style={{ labels: { fill: "none" } }}
              innerRadius={100}
              colorScale={["#32aeca", "#8e3ace", "violet", "yellow", "orange", "blue"]}
              data={data}
              x="name"
              y="number"
            />

            <VictoryLegend
              standalone={false}
              data={data}
              colorScale={["#32aeca", "#8e3ace", "violet", "yellow", "orange", "blue"]}
              dataComponent={<PieChartLegend />}
              rowGutter={{ top: 0, bottom: 30 }}
              style={{ labels: { fontSize: 24 } }}
              x={520}
              y={100}
            />
          </svg>
        </div>
      )
    );
  }
}
function mapStateToProps(state) {
  return { data: state.data };
}

export default connect(mapStateToProps, null)(PieChart);
