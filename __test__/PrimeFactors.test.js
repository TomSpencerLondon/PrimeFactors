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
    it("5 is [5]", () => {
      primeFactors = new PrimeFactors();
      expect(primeFactors.of(5)).toEqual([5]);
    });
    it("6 is [2,3]", () => {
      primeFactors = new PrimeFactors();
      expect(primeFactors.of(6)).toEqual([2, 3]);
    });
    it("7 is [7]", () => {
      primeFactors = new PrimeFactors();
      expect(primeFactors.of(7)).toEqual([7]);
    });
    it("8 is [2,2,2]", () => {
      primeFactors = new PrimeFactors();
      expect(primeFactors.of(8)).toEqual([2 , 2, 2]);
    });
    it("9 is [3, 3]", () => {
      primeFactors = new PrimeFactors();
      expect(primeFactors.of(9)).toEqual([3, 3]);
    });
  });
});