const encodeString = require("../util/encodeString");

describe("encode", () => {
  it("should encode a valid string", () => {
    const result = encodeString("AABBZZKKKKKAKK");

    expect(result).toBe("A2B2Z2K5A1K2");
  });

  it("should continue the count on a new charachter if the count goes over 9", () => {
    const result = encodeString("AAAAAAAAAAAABBZZZ");

    expect(result).toBe("A9A3B2Z3");
  });

  it("should be case insensitive and return the encoded string in uppercase", () => {
    const result = encodeString("aaabbLLL");

    expect(result).toBe("A3B2L3");
  });
});
