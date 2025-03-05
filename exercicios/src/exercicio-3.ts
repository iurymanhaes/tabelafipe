const axios = require("axios");

interface Character {
  name: string;
  gender: string;
  image: string;
  species: string;
}

interface FormattedCharacter {
  nome: string;
  genero: string;
  avatar: string;
  especie: string;
}

async function getRickAndMortyCharacters(): Promise<FormattedCharacter[]> {
  const characters = [
    "Rick Sanchez",
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
  ];

  try {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character",
      { params: { name: characters.join("|") } } 
    );

    
    return data.results
      .filter((char: Character) => characters.includes(char.name))
      .map((char: Character) => ({
        nome: char.name,
        genero: char.gender === "Male" ? "Homem" : "Mulher",
        avatar: char.image,
        especie: char.species === "Human" ? "Humano" : char.species,
      }));
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return [];
  }
}

module.exports = getRickAndMortyCharacters;
