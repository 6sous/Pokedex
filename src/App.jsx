import './App.css'
import PokemonCard from './components/PokemonCard';
import NextButton from './components/NextButton';
import PreviousButton from './components/PreviousButton';
import { useState } from 'react';



function App() {
  
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0)
  
  const NextPokemonClick = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const PreviousPokemonClick = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  return (
    <div>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
      <div className='buttons' >
        {pokemonIndex<pokemonList.length && pokemonIndex>0? <PreviousButton Previous= {PreviousPokemonClick} /> : null}
        {pokemonIndex >= 0 && pokemonIndex<pokemonList.length-1? <NextButton Next = {NextPokemonClick} /> :null}
        
      </div>
    </div>
  )

}

  

export default App
