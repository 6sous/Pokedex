function PokemonCard({pokemon}) {
    const {name, imgSrc} = pokemon
    
    return  <figure className="card">
                <figcaption className={`img-title`}>{name}</figcaption>
                {imgSrc? <img style ={{width: 400,}} src={imgSrc} alt="" /> : <p>???</p>}
                
            </figure>
}

export default PokemonCard