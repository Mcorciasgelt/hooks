import './App.css';
import React from 'react';
import useFetchCharacter from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { character: pokemon , loading: loadingPokemon } = useFetchCharacter(urlPokemon)

  const { character: rick, loading: loadingRick } = useFetchCharacter(urlRick)

  if (loadingPokemon || loadingRick) {
    return (
      <h2>Cargando...</h2>
    )
  }
  
  return (
    <>
    <h2>Personaje Pokemón</h2>
    <p>{pokemon.name}</p>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />

    <h2>Personaje Rick&Morty</h2>
    <p>{rick.name}</p>
    <img src={rick.image} alt={rick.name} />
    </>
  );
}

export default App;
