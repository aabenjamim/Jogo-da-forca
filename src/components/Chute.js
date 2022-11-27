export default function Chute(props){
    
    const chute = props.chute
    const setChute = props.setChute
    const texto = props.texto
    const setTexto = props.setTexto
    const habilitar = props.habilitar

    function chutar(){
        setChute([...chute, texto])
        setTexto("")
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
