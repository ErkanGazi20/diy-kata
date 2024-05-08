const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.');
    expect(reachDestination(120, 40)).toBe('I should be there in 3 hours.');
    expect(reachDestination(90, 30)).toBe('I should be there in 3 hours.');
    expect(reachDestination(85, 40)).toBe('I should be there in 2.5 hours.');
    expect(reachDestination(50, 50)).toBe('I should be there in 1 hour.');
    expect(reachDestination(5, 10)).toBe('I should be there in 0.5 hours.');
  });

  it("throws an error if the speed is zero", () =>{
    expect(() => reachDestination(10, 0)).toThrow('Speed cannot be zero')
  });
});
