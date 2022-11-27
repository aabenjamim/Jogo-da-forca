export default function Chute(props){
    
    const chute = props.chute
    const setChute = props.setChute
    const texto = props.texto
    const setTexto = props.setTexto
    const habilitar = props.habilitar
    const palavraListada = props.palavraListada
    const palavraResposta = palavraListada.join("")
    const setHabilitar = props.setHabilitar
    const setImgForca = props.setImgForca
    const setDivOculta= props.setDivOculta


    function verificarChute(){
        if(texto === palavraResposta){
            setHabilitar(true)
            setDivOculta(<div className="tracos" data-test="word" style={{color: "green"}}
            data-answer={`${palavraListada.join("")}`}>{palavraResposta}</div>)
        } else{
            setHabilitar(true)
            setImgForca("forca6")
            setDivOculta(<div className="tracos" data-test="word" style={{color: "red"}}
            data-answer={`${palavraListada.join("")}`}>{palavraResposta}</div>)
        }
    }

    function chutar(){
        setChute([...chute, texto])
        setTexto("")
        verificarChute()
    }

    return(
    <div className="resposta">
        <label>Já sei a palavra!</label>
        <input data-test="guess-input" value={texto} disabled={habilitar}
        onChange={(e) => setTexto(e.target.value)}/>
        <button data-test="guess-button" onClick={chutar}>Chutar</button>
    </div>
    )
}
