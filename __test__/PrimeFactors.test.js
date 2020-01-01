const { PrimeFactors } = require('../src/PrimeFactors.js');

describe("PrimeFactors", () => {
  describe("of", () => {
    it("1 is []", () => {
        primeFactors = new PrimeFactors();
        expect(primeFactors.of(1)).toEqual([]);
    })
  });
});