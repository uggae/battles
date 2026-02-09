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
    return [population[0], population[1]];
  }

  mutate(chromosome: string, p: number) {
    // TODO: Implement the mutate method
    return chromosome;
  }

  crossover(chromosome1: string, chromosome2: string) {
    // TODO: Implement the crossover method
    return [chromosome1, chromosome2];
  }

  fitness(chromosome: string) {
    const getValues = (chromosome: string) => {
      let sum = 0;
      let product = 1;
      for (let i = 0; i < chromosome.length; i++) {
        const curr = chromosome[i];
        if (curr === "1") {
          sum += i + 1;
        } else if (curr === "0") {
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

  getInitialPopulation(length: number, populationSize: number): string[] {
    const population: string[] = [];
    for (let i = 0; i < populationSize; i++) {
      population.push(this.generate(length));
    }
    return population;
  }

  run(
    fitness: (chromosome: string) => number,
    length: number,
    p_c: number,
    p_m: number,
    iterations = 100,
  ) {
    const populationSize = 100;
    let population = this.getInitialPopulation(length, populationSize);
    for (let i = 0; i < iterations; i++) {
      const fitnesses = population.map(fitness);
      let newPopulation = [];
      while (newPopulation.length < population.length) {
        const selected = this.select(population, fitnesses);
        const crossed =
          Math.random() < p_c
            ? this.crossover(selected[0], selected[1])
            : selected;
        const mutated = [
          this.mutate(crossed[0], p_m),
          this.mutate(crossed[1], p_m),
        ];
        newPopulation.push(mutated[0], mutated[1]);
      }
      population = newPopulation;
    }
    return population;
  }

  getBestChromosome(population: string[]): string {
    const fitnesses = population.map(this.fitness);
    return population[fitnesses.indexOf(Math.max(...fitnesses))];
  }

  presentChromosome(chromosome: string) {
    console.log("chromosome: ", chromosome);
    console.log("fitness: ", this.fitness(chromosome));
    console.log("--------------------------------");
  }
}
