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
  it("generate generates a random binary string", () => {
    const ga = new GeneticAlgorithm();
    const result = ga.generate(10);
    expect(result).to.have.lengthOf(10);
    expect(result).to.match(/^[01]+$/);
    expect(result).to.be.a("string");
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
      expect(result).to.be.equal(0.004733386421189412);
    });
  });
});
