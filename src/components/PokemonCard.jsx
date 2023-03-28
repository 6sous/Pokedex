import PropTypes from "prop-types"

function PokemonCard({pokemon}) {
    const {name, imgSrc} = pokemon;

    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        }).isRequired
    }

    return  <figure className="card">
                <figcaption className={`img-title`}>{name}</figcaption>
                {imgSrc? <img style ={{width: 400,}} src={imgSrc} alt="" /> : <p>???</p>}
                
            </figure>
}

export default PokemonCard