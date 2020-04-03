import { decimal2IEEE, IEEE2Decimal } from "../utils/Utils";
import Individual from "./Individual";

class Population {
  constructor(
    size,
    minv,
    maxv,
    mode,
    crossProbability,
    mutateProbability,
    equation,
    ignore
  ) {
    this.currentPopulation = this.generate(size, minv, maxv);
    this.equation = equation;
    this.maximum = maxv;
    this.minimum = minv;
    this.currentFitness = this.currentPopulation.map(individual =>
      individual.getFitness(this.equation, mode)
    );
    this.crossProbability = crossProbability;
    this.mutateProbability = mutateProbability;
    this.generationNumber = 0;
    this.mode = mode;
    this.fittestAtGen = 0;
    this.currentFittest = undefined;
    this.fittestPopulation = this.currentPopulation;
    this.fittestIndi = this.currentPopulation[0];
    this.fittestFitness = this.currentFitness;
    this.fittest = undefined;
    this.ignore = ignore;
    this.getFittest();
  }

  generate = (size, minv, maxv) => {
    var population = Array(size)
      .fill(null)
      .map(() => {
        var DNA = [];
        for (let i = 0; i < minv.length; i++) {
          DNA.push(decimal2IEEE(Math.random() * (maxv[i] - minv[i]) + minv[i]));
        }
        return new Individual(DNA);
      });
    return population;
  };

  nextGeneration = () => {
    let newPopulation = [];
    while (newPopulation.length < this.currentPopulation.length) {
      newPopulation = [...newPopulation, ...this.have2children()];
    }
    if (newPopulation.length > this.currentPopulation.length) {
      newPopulation.splice(-1, 1);
    }
    this.currentPopulation = newPopulation;
    this.currentFitness = this.currentPopulation.map(individual =>
      individual.getFitness(this.equation, this.mode)
    );
    this.generationNumber += 1;
    this.getFittest();
  };

  have2children = () => {
    const mom = this.select();
    const dad = this.select();
    const possiblyCross =
      Math.random() < this.crossProbability
        ? this.crossover(mom, dad)
        : [mom, dad];
    const mutatedChildren = possiblyCross.map(individual => {
      return individual.mutate(
        this.mutateProbability,
        this.minimum,
        this.maximum,
        this.ignore
      );
    });
    return mutatedChildren;
  };

  select = () => {
    var cfitness = this.currentFitness.slice();
    cfitness.sort((a, b) => a - b);
    var newFitness = Array(this.currentFitness.length).fill(null);
    for (let i = 0; i < this.currentFitness.length; i++) {
      newFitness[i] = cfitness.findIndex(f => f === this.currentFitness[i]) + 1;
    }
    const fitnessSum = newFitness.reduce((s, f) => s + f, 0);
    let roll = Math.random() * fitnessSum;
    for (let i = 0; i < this.currentPopulation.length; i++) {
      if (roll < newFitness[i]) return this.currentPopulation[i];
      roll -= newFitness[i];
    }
  };

  crossover = (mom, dad) => {
    let n1 = Math.floor(Math.random() * 32);
    let n2 = Math.floor(Math.random() * 32);
    const start = Math.min(n1, n2);
    const end = Math.max(n1, n2);
    const first = [];
    const second = [];
    for (let i = 0; i < mom.DNAset.length; i++) {
      first.push(
        this.orderedCross(
          start,
          end,
          mom.DNAset[i],
          dad.DNAset[i],
          this.minimum[i],
          this.maximum[i]
        )
      );
      second.push(
        this.orderedCross(
          start,
          end,
          dad.DNAset[i],
          mom.DNAset[i],
          this.minimum[i],
          this.maximum[i]
        )
      );
    }
    return [new Individual(first), new Individual(second)];
  };

  orderedCross = (start, end, p1, p2, min, max) => {
    var childDNA = Array(32).fill(null);
    for (let i = 0; i < 32; i++) {
      childDNA[i] = i >= start && i < end ? p1[i] : p2[i];
    }
    const val = IEEE2Decimal(childDNA);
    if (this.ignore) {
      return childDNA;
    }
    if (val <= max && val >= min) {
      return childDNA;
    } else {
      return p1;
    }
  };

  getFittest = () => {
    const fittestIndex = this.currentFitness.reduce(
      (fittestIndi, current, i, scores) => {
        if (current > scores[fittestIndi]) {
          return i;
        } else {
          return fittestIndi;
        }
      },
      0
    );
    const currentFittest = this.currentFitness[fittestIndex];
    this.currentFittest = currentFittest;
    if (this.fittest === undefined || currentFittest > this.fittest) {
      this.fittest = currentFittest;
      this.fittestAtGen = this.generationNumber;
      this.fittestPopulation = this.currentPopulation;
      this.fittestIndi = this.currentPopulation[fittestIndex];
      this.fittestFitness = this.currentFitness;
    }
  };
}

export default Population;
