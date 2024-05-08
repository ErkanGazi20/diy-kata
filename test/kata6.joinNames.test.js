const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toBe('Bart, Lisa & Maggie');
    expect(joinNames([{name: 'Homer'}, {name: 'Marge'}])).toBe('Homer & Marge');
    expect(joinNames([{name: 'Moe'}])).toBe('Moe');
    expect(joinNames([])).toBe('');
    expect(joinNames([{name: 'Carl'}, {name: 'Lenny'}, {name: 'Barney'}, {name: 'Ned'}])).toBe('Carl, Lenny, Barney & Ned');
  });
});
