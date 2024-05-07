const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("Returns Yes if true", () => {
    expect(booleanToWord('true')).toBe('Yes')
  });

  it("Returns No if  false", () => {
    expect(booleanToWord('false')).toBe('No')
  });
});
