import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

const PerformanceGraph = ({ graph }) => {
  const { performanceX, performanceY, performanceY2 } = graph;
  const data = {
    labels: performanceX,
    datasets: [
      {
        label: "Best Fitness",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: performanceY2
      },
      {
        label: "Current Fitness",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#FF6384",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#FF6384",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: performanceY
      }
    ]
  };
  return (
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8">
        <h1>Performance</h1>
        <Line data={data} />
      </div>
      <div className="col-md-2" />
    </div>
  );
};

PerformanceGraph.propTypes = {
  graph: PropTypes.object.isRequired
};

const mapStateToProps = State => ({
  graph: State.graph
});

export default connect(mapStateToProps, {})(PerformanceGraph);
