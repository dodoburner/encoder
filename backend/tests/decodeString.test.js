const decodeString = require("../util/decodeString");

describe("encode", () => {
  it("should decode a valid encoded string", () => {
    const result = decodeString("B5L4M1");

    expect(result).toBe("BBBBBLLLLM");
  });

  it("should return a valid string if there are multiple same charachters in a row", () => {
    const result = decodeString("A9A3");

    expect(result).toBe("AAAAAAAAAAAA");
  });

  it("should be case insensitive and return the decoded string in uppercase", () => {
    const result = decodeString("a5l7M3");

    expect(result).toBe("AAAAALLLLLLLMMM");
  });
});
