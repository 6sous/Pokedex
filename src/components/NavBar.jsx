function Navbar({pokemonList, set}) {

    const PokemonClick = (num) => {
        set(num)
      }

    return (pokemonList.map((pokemon, index) =>(<button key = {pokemon.name} onClick= {()=> PokemonClick(index)} >{pokemon.name}</button>)))   
}

export default Navbar