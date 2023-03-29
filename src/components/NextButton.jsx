function NextButton({Next,Alert}) {
    Alert()
    return <button onClick={Next} >{">"}</button>
    
}

export default NextButton