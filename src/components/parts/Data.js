import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVariable, setEquation } from "../../actions/phaseActions";
import Population from "../population/Population";
import IndividualData from "../population/IndividualData";
import {
  initializePopulation,
  nextGeneration
} from "../../actions/populationActions";
import {
  addPerformancePoint,
  clearPerformance
} from "../../actions/graphActions";
import PerformanceGraph from "../graphs/PerformanceGraph";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fit: false,
      timerOn: false,
      switcher: false
    };
    this.onResetSet = this.onResetSet.bind(this);
    this.onResetVar = this.onResetVar.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    this.props.addPerformancePoint(
      this.props.population.population.generationNumber,
      this.props.population.population.currentFittest,
      this.props.population.population.fittest
    );
  }

  onResetVar = () => {
    if (this.state.timerOn) {
      this.pauseTimer();
    }
    this.props.clearPerformance();
    this.props.setVariable();
  };

  onResetSet = () => {
    if (this.state.timerOn) {
      this.pauseTimer();
    }
    this.props.clearPerformance();
    this.props.setEquation();
  };

  startTimer = () => {
    this.setState({ timerOn: true, switcher: true });
    this.timer = setInterval(() => {
      this.props.nextGeneration(this.props.population.population);
    }, 0);
    this.timer2 = setInterval(
      () =>
        this.props.addPerformancePoint(
          this.props.population.population.generationNumber,
          this.props.population.population.currentFittest,
          this.props.population.population.fittest
        ),
      500
    );
  };

  pauseTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
    clearInterval(this.timer2);
  };

  reset = () => {
    this.props.initializePopulation(this.props.population);
    this.setState({ switcher: false });
    this.pauseTimer();
    this.props.clearPerformance();
  };

  render() {
    const { fit, timerOn, switcher } = this.state;
    const {
      equation,
      maximum,
      minimum,
      size,
      crossProbability,
      mutateProbability,
      mode,
      population
    } = this.props.population;

    const {
      currentFitness,
      fittestAtGen,
      generationNumber,
      currentFittest,
      fittest,
      fittestIndi,
      fittestPopulation,
      currentPopulation,
      fittestFitness
    } = population;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 text-center mt-1">
            <button className="btn btn-primary " onClick={this.onResetVar}>
              Reset Number of Variables
            </button>
          </div>
          <div className="col-md-6 text-center mt-1">
            <button className="btn btn-primary " onClick={this.onResetSet}>
              Reset Settings
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center h5">
            <strong>Equation: </strong>
            {equation}
          </div>
          <div className="col-md-6 col-sm-6 h5">
            <div className="row">
              {minimum.map((min, i) => (
                <div className="col-md-12" key={i}>
                  <strong>Minimum of x{i + 1}: </strong>
                  {min}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-sm-6 h5">
            <div className="row">
              {maximum.map((max, i) => (
                <div className="col-md-12" key={i}>
                  <strong>Maximum of x{i + 1}: </strong>
                  {max}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-sm-6 h5">
            <strong>Population Size: </strong>
            {size}
          </div>
          <div className="col-md-6 col-sm-6 h5">
            <strong>Cross Probability: </strong>
            {crossProbability * 100}%
          </div>
          <div className="col-md-6 col-sm-6 h5">
            <strong>Mutate Probability: </strong>
            {mutateProbability * 100}%
          </div>
          <div className="col-md-6 col-sm-6 h5">
            <strong>Mode: </strong>
            {mode}
          </div>
        </div>
        <div className="text-center">
          {timerOn ? (
            <button className="btn btn-primary mx-1" onClick={this.pauseTimer}>
              Pause
            </button>
          ) : (
            <button className="btn btn-primary mx-1" onClick={this.startTimer}>
              Start
            </button>
          )}
          {switcher ? (
            <button className="btn btn-primary mx-1" onClick={this.reset}>
              Reset
            </button>
          ) : null}
        </div>
        <PerformanceGraph />
        <div className="row">
          <div className="col-md-6 h5">
            <strong>Generation: </strong>
            {generationNumber}
          </div>
          <div className="col-md-6 h5">
            <strong>Fittest Generation: </strong>
            {fittestAtGen}
          </div>
          <div className="col-md-6 h5">
            <strong>Current Fitness: </strong>
            {currentFittest}
          </div>
          <div className="col-md-6 h5">
            <strong>Fittest: </strong>
            {fittest}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3" />
          <div className="col-md-6">
            <IndividualData
              individual={fittestIndi}
              index={-1}
              value={mode === "maxima" ? fittest : fittest * -1}
              type="success"
            />
          </div>
          <div className="col-md-3" />
        </div>
        <button
          className="btn btn-primary my-3"
          onClick={e => this.setState({ fit: !fit })}
        >
          {fit ? "See Current population" : "See Fittest Population"}
        </button>
        <Population
          population={fit ? fittestPopulation : currentPopulation}
          fitness={fit ? fittestFitness : currentFitness}
          mode={mode}
          type={fit ? "primary" : "danger"}
        />
      </div>
    );
  }
}

Data.propTypes = {
  setVariable: PropTypes.func.isRequired,
  population: PropTypes.object.isRequired,
  setEquation: PropTypes.func.isRequired,
  initializePopulation: PropTypes.func.isRequired,
  nextGeneration: PropTypes.func.isRequired,
  addPerformancePoint: PropTypes.func.isRequired,
  clearPerformance: PropTypes.func.isRequired
};

const mapStateToProps = State => ({
  population: State.population
});

export default connect(mapStateToProps, {
  setVariable,
  setEquation,
  initializePopulation,
  addPerformancePoint,
  nextGeneration,
  clearPerformance
})(Data);
