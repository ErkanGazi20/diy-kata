const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns a array of the number's relating to human, cat and dog ages respectively", () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
      expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
      expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
      expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
      expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    });
  });
