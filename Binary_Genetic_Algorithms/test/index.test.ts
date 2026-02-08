import { expect } from "chai";
import { GeneticAlgorithm } from "../src/index";

describe("binary genetic algorithms", () => {
  const ga = new GeneticAlgorithm();

  it("module initializes", () => {
    expect(ga).to.be.an("object");
    expect(ga).to.have.property("generate");
    expect(ga).to.have.property("select");
    expect(ga).to.have.property("mutate");
    expect(ga).to.have.property("crossover");
    expect(ga).to.have.property("run");
  });
  it("module initializes", () => {
    const result = ga.generate(10);
    expect(result).to.have.lengthOf(10);
    expect(result).to.match(/^[01]+$/);
    expect(result).to.be.a("string");
  });
});
