const maskifyFunction = require("../src/exercicio-1");

describe("maskify function", () => {
  test("should mask all but the last four characters", () => {
    expect(maskifyFunction("4556364607935616")).toBe("############5616");
    expect(maskifyFunction("64607935616")).toBe("#######5616");
  });

  test("should return the same string if length is 4 or less", () => {
    expect(maskifyFunction("1")).toBe("1");
    expect(maskifyFunction("")).toBe("");
  });

  test("should correctly mask non-numeric strings", () => {
    expect(maskifyFunction("Skippy")).toBe("##ippy");
    expect(maskifyFunction("Nanananananananananana Batman!")).toBe("##########################man!");
  });

  test("should handle edge cases", () => {
    expect(maskifyFunction("abcd")).toBe("abcd");
    expect(maskifyFunction("abcde")).toBe("#bcde");
  });
});