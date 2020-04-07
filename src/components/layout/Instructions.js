import React from "react";

export const Instructions = () => {
  return (
    <div className="container">
      <div className="mx-5 text-center">
        <p className="text-muted text-justify">
          This Application is made to find the Global Maxima or Minima for a
          given expressions using a Genetic Algorithm. This Algorithm takes
          certain parameters for input and based on them finds the Global Maxima
          or Minima. The variables in expressions must be named as x1,x2,x3 and
          so on. The population size must be greater that 10 individuals. The
          Cross Probability and Mutate Probability must be between 0 and 1.
          Ignore Range is to find the Global Maxima. If Ignore Range is off, the
          algorithm finds the Local Maxima or Minima. For Best Results:
          Population Size is 100, Cross Probability is 0.3 and Mutate
          Probability is 0.15.The Performance Graph shows the Best Current
          Fitness and the best fitness found yet. The Y-Axis is the fitness
          while X-Axis is the Generation number
        </p>
      </div>
    </div>
  );
};
