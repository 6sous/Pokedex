import './App.css'
import PokemonCard from './components/PokemonCard';
import NextButton from './components/NextButton';
import PreviousButton from './components/PreviousButton';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {
  
  useEffect(
    () =>  {
      alert("hello pokemon trainer :)")
    }, 
    []
 );

  // pokemonList[3].alert("pika pika!!")

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

  const Pikalert = () => {
    pokemonIndex === 3? alert("pikaka!!"): null
  }

  return (
    <div>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
      <div className='buttons' >
        {pokemonIndex>0? <PreviousButton Previous= {PreviousPokemonClick} Alert = {Pikalert} /> : null}
        {pokemonIndex<pokemonList.length-1? <NextButton Next = {NextPokemonClick} Alert = {Pikalert} /> :null}

        
      </div>
    </div>
  )

}

  

export default App
