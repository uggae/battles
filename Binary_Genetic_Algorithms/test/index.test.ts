import { expect } from "chai";
import { GeneticAlgorithm } from "../src/index";

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
      const ga = new GeneticAlgorithm();
      const result = ga.presentChromosome("01");
      expect(result).to.be.undefined;
    });
  });
});
