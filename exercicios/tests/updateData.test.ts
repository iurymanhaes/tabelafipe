const updateDataFunction = require("../src/exercicio-2");

describe("updateData function", () => {
  test("should update only existing properties", () => {
    expect(
      updateDataFunction(
        { name: "Marcos", country: "Brasil", age: 22 },
        { country: "Japão", age: 33 }
      )
    ).toEqual({ name: "Marcos", country: "Japão", age: 33 });
  });

  test("should ignore properties that do not exist in the original object", () => {
    expect(
      updateDataFunction(
        { name: "Marcos", country: "Brasil", age: 22 },
        { price: 89.9, amount: 15 }
      )
    ).toEqual({ name: "Marcos", country: "Brasil", age: 22 });
  });

  test("should return the same object if no matching keys are provided", () => {
    expect(
      updateDataFunction(
        { city: "São Paulo", state: "SP" },
        { country: "Brasil" }
      )
    ).toEqual({ city: "São Paulo", state: "SP" });
  });

  test("should update with empty newDataObject and return the same object", () => {
    expect(
      updateDataFunction({ username: "user123", email: "user@example.com" }, {})
    ).toEqual({ username: "user123", email: "user@example.com" });
  });
});
