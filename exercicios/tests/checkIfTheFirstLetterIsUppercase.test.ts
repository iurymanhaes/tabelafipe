const checkIfTheFirstLetterIsUppercaseFunction = require("../src/exercicio-4");

describe("checkIfTheFirstLetterIsUppercase function", () => {
  test("should return true if first letter is uppercase", () => {
    expect(checkIfTheFirstLetterIsUppercaseFunction("Brasil")).toBe(true);
    expect(checkIfTheFirstLetterIsUppercaseFunction("Deu Certo!")).toBe(true);
  });

  test("should return false if first letter is lowercase", () => {
    expect(checkIfTheFirstLetterIsUppercaseFunction("mobiauto")).toBe(false);
    expect(checkIfTheFirstLetterIsUppercaseFunction("xXx xXx")).toBe(false);
    expect(checkIfTheFirstLetterIsUppercaseFunction("xDD")).toBe(false);
  });

  test("should return false for empty string", () => {
    expect(checkIfTheFirstLetterIsUppercaseFunction("")).toBe(false);
  });

  test("should return false if input is undefined", () => {
    expect(checkIfTheFirstLetterIsUppercaseFunction(undefined)).toBe(false);
  });
});
