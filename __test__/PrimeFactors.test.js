const { PrimeFactors } = require('../src/PrimeFactors.js');
describe("PrimeFactors", () => {
  describe("of", () => {
    it("1 is []", () => {
        primeFactors = new PrimeFactors();
        expect(primeFactors.of(1)).toEqual([]);
    });
    it("2 is [2]", () => {
      primeFactors = new PrimeFactors();
      expect(primeFactors.of(2)).toEqual([2]);
  });
    it("3 is [3]", () => {
      primeFactors = new PrimeFactors();
      expect(primeFactors.of(3)).toEqual([3]);
    });
    it("4 is [2, 2]", () => {
      primeFactors = new PrimeFactors();
      expect(primeFactors.of(4)).toEqual([2, 2]);
    });
  });
});