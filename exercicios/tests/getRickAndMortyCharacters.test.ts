jest.mock("axios");
const axiosMock = require("axios");
const getRickAndMortyCharactersFunction = require("../src/exercicio-3");

describe("getRickAndMortyCharacters function", () => {
  test("should return the correct formatted character data", async () => {
    (axiosMock.get as jest.Mock).mockResolvedValue({
      data: {
        results: [
          { name: "Rick Sanchez", gender: "Male", image: "url1", species: "Human" },
          { name: "Morty Smith", gender: "Male", image: "url2", species: "Human" },
          { name: "Summer Smith", gender: "Female", image: "url3", species: "Human" },
          { name: "Beth Smith", gender: "Female", image: "url4", species: "Human" },
          { name: "Jerry Smith", gender: "Male", image: "url5", species: "Human" }
        ]
      }
    });

    const characters = await getRickAndMortyCharactersFunction();

    expect(characters).toEqual([
      { nome: "Rick Sanchez", genero: "Homem", avatar: "url1", especie: "Humano" },
      { nome: "Morty Smith", genero: "Homem", avatar: "url2", especie: "Humano" },
      { nome: "Summer Smith", genero: "Mulher", avatar: "url3", especie: "Humano" },
      { nome: "Beth Smith", genero: "Mulher", avatar: "url4", especie: "Humano" },
      { nome: "Jerry Smith", genero: "Homem", avatar: "url5", especie: "Humano" }
    ]);
  });
});
