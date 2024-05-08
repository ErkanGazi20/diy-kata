const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(1234)).toEqual([4,3,2,1]);
    expect(numberToReversedDigits(1002)).toEqual([2,0,0,1]);
    expect(numberToReversedDigits(0)).toEqual([0]);
    expect(numberToReversedDigits(4)).toEqual([4]);
  });
});
