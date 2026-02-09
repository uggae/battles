import { expect } from "chai";
import { GeneticAlgorithm } from "../src/index";

function makeDeterministicRandom(seq: number[]): () => number {
  let i = 0;
  return () => {
    const v = seq[i % seq.length];
    i += 1;
    return v;
  };
}

function getBestChromosomeByBruteForce(
  ga: GeneticAlgorithm,
  length: number,
): { chromosome: string; fitness: number } {
  const total = 1 << length;
  let bestChromosome = "0".repeat(length);
  let bestFitness = Number.NEGATIVE_INFINITY;
  for (let n = 0; n < total; n++) {
    const chrom = n.toString(2).padStart(length, "0");
    const fitness = ga.fitness(chrom);
    if (!Number.isFinite(fitness)) {
      // Ignore infinitely good chromosomes for this finite comparison
      continue;
    }
    if (fitness > bestFitness) {
      bestFitness = fitness;
      bestChromosome = chrom;
    }
  }
  return { chromosome: bestChromosome, fitness: bestFitness };
}

function getTopPercentileFitnessThreshold(
  ga: GeneticAlgorithm,
  length: number,
  topFraction: number,
): number {
  const total = 1 << length;
  const fitnesses: number[] = [];
  for (let n = 0; n < total; n++) {
    const chrom = n.toString(2).padStart(length, "0");
    const fitness = ga.fitness(chrom);
    if (Number.isFinite(fitness)) {
      fitnesses.push(fitness);
    }
  }
  fitnesses.sort((a, b) => b - a);
  const countTop = Math.max(1, Math.floor(fitnesses.length * topFraction));
  const index = countTop - 1;
  return fitnesses[index];
}

describe("binary genetic algorithms", () => {
  it("module initializes", () => {
    const ga = new GeneticAlgorithm();
    expect(ga).to.be.an("object");
    expect(ga).to.have.property("generate");
    expect(ga).to.have.property("select");
    expect(ga).to.have.property("mutate");
    expect(ga).to.have.property("crossover");
    expect(ga).to.have.property("run");
    expect(ga).to.have.property("fitness");
  });

  describe("generate:", () => {
    it("generates a random binary string", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.generate(10);
      expect(result).to.have.lengthOf(10);
      expect(result).to.match(/^[01]+$/);
      expect(result).to.be.a("string");
    });
  });

  describe("select:", () => {
    it("selects two chromosomes", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.select(["00", "01"], [0.5, 0.5]);
      expect(result).to.be.an("array").and.have.lengthOf(2);
      result.forEach((s) => {
        expect(s)
          .to.be.a("string")
          .and.to.match(/^[01]+$/);
      });
    });
    it("selects two chromosomes from the population", () => {
      const ga = new GeneticAlgorithm();
      const population = ["00", "01"];
      const result = ga.select(population, [0.5, 0.5]);
      expect(result).to.be.an("array").and.have.lengthOf(2);
      result.forEach((chromosome) => expect(population).to.include(chromosome));
    });
  });

  describe("mutate:", () => {
    it("mutates a binary string", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.mutate("00", 0.5);
      expect(result)
        .to.be.a("string")
        .and.to.match(/^[01]+$/);
      expect(result).to.have.lengthOf(2);
    });
    it("no mutation when p is 0", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.mutate("01001", 0);
      expect(result)
        .to.be.a("string")
        .and.to.match(/^[01]+$/);
      expect(result).to.have.lengthOf(5);
      expect(result).to.be.equal("01001");
    });
    it("full mutation when p is 1", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.mutate("01001", 1);
      expect(result)
        .to.be.a("string")
        .and.to.match(/^[01]+$/);
      expect(result).to.have.lengthOf(5);
      expect(result).to.be.equal("10110");
    });
  });

  describe("crossover:", () => {
    it("crossover two binary strings", () => {
      const ga = new GeneticAlgorithm();
      const input = ["00000", "11111"];
      const result = ga.crossover(input[0], input[1]);
      expect(result).to.be.an("array").and.have.lengthOf(2);
      result.forEach((chromosome) =>
        expect(chromosome)
          .to.be.a("string")
          .and.to.match(/^[01]+$/),
      );
      const len = input[0].length;
      for (let i = 0; i < len; i++) {
        const inputZeros = input.filter((c) => c[i] === "0").length;
        const inputOnes = input.filter((c) => c[i] === "1").length;
        const outputZeros = result.filter((c) => c[i] === "0").length;
        const outputOnes = result.filter((c) => c[i] === "1").length;
        expect(outputZeros, `position ${i} zeros`).to.equal(inputZeros);
        expect(outputOnes, `position ${i} ones`).to.equal(inputOnes);
      }
    });
  });

  describe("fitness:", () => {
    it("calculates the fitness of a binary string (0)", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.fitness("");
      expect(result).to.be.an.string;
      expect(result).to.be.greaterThan(0);
      expect(result).to.be.lessThan(1);
      expect(result).to.be.equal(0.0047075115315785045);
    });
    it("calculates the fitness of a binary string (2)", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.fitness("01");
      expect(result).to.be.an.string;
      expect(result).to.be.greaterThan(0);
      expect(result).to.be.lessThan(1);
      expect(result).to.be.equal(0.0047152503703509555);
    });
    it("calculates the fitness of a binary string (10)", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.fitness("0101010101");
      expect(result).to.be.an.string;
      expect(result).to.be.greaterThan(0);
      expect(result).to.be.lessThan(1);
      expect(result).to.be.equal(0.0013604636335842154);
    });
  });

  describe("run:", () => {
    it("runs the genetic algorithm", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.run(ga.fitness, 10, 0.8, 0.1);
      expect(result).to.be.an("array").and.have.lengthOf(100);
      result.forEach((chromosome) =>
        expect(chromosome)
          .to.be.a("string")
          .and.to.match(/^[01]+$/),
      );
    });
  });

  describe("getBestChromosome:", () => {
    it("gets the best chromosome from the population", () => {
      const ga = new GeneticAlgorithm();
      const result = ga.getBestChromosome(["00", "01", "10", "11"]);
      expect(result)
        .to.be.a("string")
        .and.to.match(/^[01]+$/);
      expect(result).to.be.equal("10");
    });
  });

  describe("presentChromosome:", () => {
    it("presents the chromosome", () => {
      const consoleLogSpy = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});
      const ga = new GeneticAlgorithm();
      const result = ga.presentChromosome("01");

      expect(consoleLogSpy.mock.calls).to.deep.include(["chromosome: ", "01"]);
      expect(consoleLogSpy.mock.calls).to.deep.include([
        "fitness: ",
        0.0047152503703509555,
      ]);
      expect(consoleLogSpy.mock.calls).to.deep.include([
        "--------------------------------",
      ]);
      expect(result).to.be.undefined;
      consoleLogSpy.mockRestore();
    });
  });

  describe("complete:", () => {
    it("completes the genetic algorithm", () => {
      const randomMock = jest
        .spyOn(Math, "random")
        .mockImplementation(
          makeDeterministicRandom([
            0.1, 0.7, 0.3, 0.9, 0.4, 0.2, 0.8, 0.5, 0.6, 0.05,
          ]),
        );
      const consoleLogSpy = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});
      const ga = new GeneticAlgorithm();
      const { fitness: bestTrueFitness } = getBestChromosomeByBruteForce(
        ga,
        10,
      );
      const top10PercentThreshold = getTopPercentileFitnessThreshold(
        ga,
        10,
        0.1,
      );
      const result = ga.complete();
      expect(result).to.be.undefined;
      const calls = consoleLogSpy.mock.calls;
      const chromCall = calls.find((args) => args[0] === "chromosome: ");
      const fitnessCall = calls.find((args) => args[0] === "fitness: ");

      expect(chromCall).to.not.be.undefined;
      expect(fitnessCall).to.not.be.undefined;

      const loggedChromosome = chromCall![1] as string;
      const loggedFitness = fitnessCall![1] as number;

      expect(loggedChromosome)
        .to.be.a("string")
        .and.to.match(/^[01]+$/);

      // Check that the GA converged to a chromosome whose fitness is in the top 10%,
      // according to a brute-force enumeration of all length-10 chromosomes.
      expect(loggedFitness).to.be.at.least(top10PercentThreshold);

      expect(calls).to.deep.include(["--------------------------------"]);
      consoleLogSpy.mockRestore();
      randomMock.mockRestore();
    });
  });
});
