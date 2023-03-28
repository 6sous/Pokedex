function PokemonCard() {
    const pokemon = pokemonList[1]

    return  <figure className="card">
                <figcaption className="img-title">{pokemon.name}</figcaption>
                {pokemon.imgSrc? <img style ={{width: 400,}} src={pokemon.imgSrc} alt="" /> : <p>???</p>}
                
            </figure>
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard