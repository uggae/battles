/**
 * Binary genetic algorithms module
 * @module binary-genetic-algorithms
 */

export class GeneticAlgorithm {
  generate(length: number) {
    let result = "";
    const getItem = () => {
      return Math.random() > 0.5 ? "0" : "1";
    };
    for (let i = 0; i < length; i++) {
      const newItem = getItem();
      result = `${result}${newItem}`;
    }
    return result;
  }

  select(population: string[], fitnesses: number[]) {
    // TODO: Implement the select method
  }

  mutate(chromosome: string, p: number) {
    // TODO: Implement the mutate method
  }

  crossover(chromosome1: string, chromosome2: string) {
    // TODO: Implement the crossover method
  }

  fitness(chromosome: string) {
    const getValues = (chromosome: string) => {
      let sum = 0;
      let product = 1;
      for (let i = 0; i < chromosome.length; i++) {
        const curr = chromosome[i];
        if (curr === "0") {
          sum += i + 1;
        } else if (curr === "1") {
          product *= i + 1;
        } else {
          throw new Error("Invalid character in chromosome");
        }
      }
      return { sum, product };
    };
    // const sum = chromosome
    //   .split("")
    //   .reduce((acc, curr, idx, arr) => acc + parseInt(curr) * (idx + 1), 0);
    // const product = chromosome
    //   .split("")
    //   .reduce(
    //     (acc, curr, idx, arr) => acc * (1 - parseInt(curr)) * (idx + 1),
    //     1,
    //   );
    const { sum, product } = getValues(chromosome);
    const getScore = (sum: number, product: number) => {
      const idealSum = 38;
      const idealProduct = 210;
      return Math.sqrt((sum - idealSum) ** 2 + (product - idealProduct) ** 2);
    };
    const score = getScore(sum, product);
    return 1 / score;
  }

  run(
    fitness: (chromosome: string) => number,
    length: number,
    p_c: number,
    p_m: number,
    iterations = 100,
  ) {
    // TODO: Implement the run method
  }
}
