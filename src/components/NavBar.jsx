function Navbar({DisplayCard, name, index}) {
    return <button onClick= {()=> DisplayCard(index)} >{name}</button>   
}

export default Navbar