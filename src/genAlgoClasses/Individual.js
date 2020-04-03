import { newBit, IEEE2Decimal } from "../utils/Utils";
import { evaluate } from "mathjs";

class Individual {
  constructor(values) {
    this.DNAset = values ? values : [];
  }

  mutate = (mutateProbability, minimum, maximum, ignore) => {
    const DNAset = [];
    this.DNAset.forEach((originalDNA, i) => {
      const DNAsign = originalDNA.slice(0, 1);
      const DNAexponent = originalDNA.slice(1, 9);
      const DNAmantissa = originalDNA.slice(9);
      if (Math.random() < mutateProbability) {
        DNAexponent[Math.floor(Math.random() * 8)] = newBit();
      }
      for (let i = 0; i < DNAmantissa.length; i++) {
        if (Math.random() < mutateProbability) {
          DNAmantissa[i] = newBit();
        }
      }
      const DNA = [...DNAsign, ...DNAexponent, ...DNAmantissa];
      const val = IEEE2Decimal(DNA);
      if (ignore) {
        DNAset.push(DNA);
      } else {
        if (val >= minimum[i] && val <= maximum[i]) {
          DNAset.push(DNA);
        } else {
          DNAset.push(originalDNA);
        }
      }
    });
    return new Individual(DNAset);
  };

  getFitness = (exp, maxmin) => {
    return maxmin === "maxima" ? this.#getValue(exp) : -1 * this.#getValue(exp);
  };

  #getValue = exp => {
    var scope = {};
    for (let i = 0; i < this.DNAset.length; i++) {
      var k = "x" + (i + 1);
      scope[k] = IEEE2Decimal(this.DNAset[i]);
    }
    return evaluate(exp, scope);
  };
}

export default Individual;
