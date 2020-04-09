import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVariable } from "../../actions/phaseActions";

const Description = ({ setVariable }) => {
  return (
    <div className="container mt-5">
      <div className="text-right mb-3">
        <button className="btn btn-primary" onClick={() => setVariable()}>
          RUN ALGORITHM
        </button>
      </div>
      <div className="my-3">
        <h2 className="display-5 font-weight-bold text-center text-primary">
          GENETIC ALGORITHM
        </h2>
        <p className="text-justify">
          A genetic algorithm is a search heuristic that is inspired by Charles
          Darwin’s theory of natural evolution. This algorithm reflects the
          process of natural selection where the fittest individuals are
          selected for reproduction to produce offspring of the next generation.
        </p>
        <p className="text-justify">
          This Application is made to find the Global Maxima or Minima for a
          given expressions using a Genetic Algorithm. This Algorithm takes
          certain parameters for input and based on them finds the Global Maxima
          or Minima.
        </p>
      </div>
      <div className="my-3">
        <h2 className="display-5 font-weight-bold text-center text-primary">
          NOTION OF NATURAL SELECTION
        </h2>
        <p className="text-justify">
          The process of natural selection starts with the selection of fittest
          individuals from a population. They produce offspring which inherit
          the characteristics of the parents and will be added to the next
          generation. If parents have better fitness, their offspring will be
          better than parents and have a better chance at surviving. This
          process keeps on iterating and at the end, a generation with the
          fittest individuals will be found.
        </p>
        <p className="text-justify">
          This notion can be applied for a search problem. We consider a set of
          solutions for a problem and select the set of best ones out of them.
        </p>
        <p className="text-justify">
          <strong>Five</strong> phases are considered in a genetic algorithm.
        </p>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center">
            <ol className="list-group">
              <li className="list-group-item">Initial Population</li>
              <li className="list-group-item">Fitness Function</li>
              <li className="list-group-item">Selection</li>
              <li className="list-group-item">Crossover</li>
              <li className="list-group-item">Mutation</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="my-3">
        <h4 className="display-6 font-weight-bold text-primary">
          INITIAL POPULATION
        </h4>
        <p className="text-justify">
          The process begins with a set of individuals which is called a{" "}
          <strong>Population</strong>. Each individual is a solution to the
          problem you want to solve.
        </p>
        <p className="text-justify">
          An individual is characterized by a set of parameters (variables)
          known as <strong>Genes</strong>. Genes are joined into a string to
          form a <strong>Chromosome</strong>
          (solution).
        </p>
        <p className="text-justify">
          In a genetic algorithm, the set of genes of an individual is
          represented using a string, in terms of an alphabet. Usually, binary
          values are used (string of 1s and 0s). We say that we encode the genes
          in a chromosome.
        </p>
        <p className="text-justify">
          In our Algorithm, each expression can have multiple variables, so each
          individual has n number of Chromosomes where n is the number of
          variables. At the beginning, each individual will be assigned random
          values to its variables. These values are then converted into IEEE
          single-precision floating-point format for the ease of operation on
          the value. The conversion method can be found{" "}
          <a href="https://en.wikipedia.org/wiki/Single-precision_floating-point_format">
            here
          </a>
          .
          <br />
          <br />
          <strong>EXAMPLE:</strong>
          <br />
          <div className="text-center">
            X = 45.231 <br /> DNA = 01000010001101001110110010001011
          </div>
          <br />
          <div className="text-center">
            X = -38755.174 <br /> DNA = 11000111000101110110001100101100
          </div>
        </p>
      </div>
      <div className="my-3">
        <h4 className="display-6 font-weight-bold text-primary">
          FITNESS FUNCTION
        </h4>
        <p className="text-justify">
          The <strong>fitness function</strong> determines how fit an individual
          is (the ability of an individual to compete with other individuals).
          It gives a <strong>fitness score</strong> to each individual. The
          probability that an individual will be selected for reproduction is
          based on its fitness score.
        </p>
        <p className="text-justify">
          In our Algorithm, the Fitness Function is the expression to be
          evaluated itself. In case of <strong>Maxima</strong> the Fitness Score
          is the value evaluated, while in case of <strong>Minima</strong> the
          Fitness Score is the negative of the value evaluated.
        </p>
      </div>
      <div className="my-3">
        <h4 className="display-6 font-weight-bold text-primary">SELECTION</h4>
        <p className="text-justify">
          The idea of <strong>selection</strong> phase is to select the fittest
          individuals and let them pass their genes to the next generation.
        </p>
        <p className="text-justify">
          Two pairs of individuals (<strong>parents</strong>) are selected based
          on their fitness scores. Individuals with high fitness have more
          chance to be selected for reproduction.
        </p>
        <p className="text-justify">
          In this Application, a combination of <strong>Rank Selection</strong>{" "}
          and <strong>Roulette Wheel Selection</strong> is used. Rank Selection
          also works with negative fitness values and is mostly used when the
          individuals in the population have very close fitness values (this
          happens usually at the end of the run). This leads to each individual
          having an almost equal share of the pie (like in case of fitness
          proportionate selection) and hence each individual no matter how fit
          relative to each other has an approximately same probability of
          getting selected as a parent. This in turn leads to a loss in the
          selection pressure towards fitter individuals, making the GA to make
          poor parent selections in such situations.
        </p>
        <p className="text-justify">
          In this, we remove the concept of a fitness value while selecting a
          parent. However, every individual in the population is ranked
          according to their fitness. The selection of the parents depends on
          the rank of each individual and not the fitness. The higher ranked
          individuals are preferred more than the lower ranked ones.
        </p>
        <p className="text-justify">
          Using the ranks from Rank Selection as Fitness Scores, roulette wheel
          selection is done. A circular wheel is divided into n pies, where n is
          the number of individuals in the population. Each individual gets a
          portion of the circle which is proportional to its fitness value. A
          fixed point is chosen on the wheel circumference as shown and the
          wheel is rotated. The region of the wheel which comes in front of the
          fixed point is chosen as the parent. For the second parent, the same
          process is repeated.
        </p>
        <p className="text-justify">
          It is clear that a fitter individual has a greater pie on the wheel
          and therefore a greater chance of landing in front of the fixed point
          when the wheel is rotated. Therefore, the probability of choosing an
          individual depends directly on its fitness.
        </p>
      </div>
      <div className="my-3">
        <h4 className="display-6 font-weight-bold text-primary">CROSSOVER</h4>
        <p className="text-justify">
          Crossover is the most significant phase in a genetic algorithm. For
          each pair of parents to be mated, a crossover point is chosen at
          random from within the genes. Offspring are created by exchanging the
          genes of parents among themselves until the crossover point is
          reached. The new offspring are added to the population.
        </p>
        <p className="text-justify">
          In our Algorithm, two random points are selected and the new off
          springs are crossed over based on those points.
          <br />
          <br />
          <strong>EXAMPLE:</strong>
          <br />
          <div className="text-center">
            X1 = 45.231 <br /> DNA1 = 01000010001101001110110010001011
          </div>
          <br />
          <div className="text-center">
            X2 = -38755.174 <br /> DNA2 = 11000111000101110110001100101100
          </div>
          <br />
          <div className="text-center">
            <strong>Crossover Points:</strong>
            <br />
            p1 = 10 &amp; p2 = 20
          </div>
          <br />
          <div className="text-center">
            <strong>NEW DNA:</strong>
            <br />
            X1 = 37.855998992919921875
            <br />
            DNA1 = 01000010000101110110110010001011
            <br />
            X2 = -46307.171875
            <br />
            DNA2 = 11000111001101001110001100101100
          </div>
        </p>
      </div>
      <div className="my-3">
        <h4 className="display-6 font-weight-bold text-primary">MUTATION</h4>
        <p className="text-justify">
          In certain new offspring formed, some of their genes can be subjected
          to a <strong>mutation</strong> with a low random probability. This
          implies that some of the bits in the bit string can be flipped.
        </p>
        <p className="text-justify">
          Mutation occurs to maintain diversity within the population and
          prevent premature convergence.
        </p>
      </div>
    </div>
  );
};

Description.propTypes = {
  setVariable: PropTypes.func.isRequired,
};

export default connect(null, { setVariable })(Description);
