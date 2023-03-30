import './App.css'
import PokemonCard from './components/PokemonCard';
import Navbar from './components/NavBar';
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
  
  const PokemonClick = (num) => {
    setPokemonIndex(num)
  }

  return (
    <div>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
      <div className='buttons' >
        {pokemonList.map((pokemon,index)=> (<Navbar index = {index} key = {pokemon.name} DisplayCard = {PokemonClick} name = {pokemon.name}/>))}
        
      </div>
    </div>
  )

}

  

export default App
