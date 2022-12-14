import palavras from "./palavras"

export default function Jogo({divOculta, palavraListada, setHabilitar, 
    setListaTracos, setDivOculta, lista, setPalavraListada, setLista, listinha,
    imgForca, setImgForca, setErros}){
    
  function escolherPalavra(){
    let comparador = (() => Math.random() - 0.5) 
    const listaAleatoria = palavras.sort(comparador);
    const primeiraPalavra = listaAleatoria[0]
    palavraListada = primeiraPalavra.split("")
    setPalavraListada(palavraListada)
  }


  function iniciarJogo(){
    setErros(0)
    setImgForca("forca0")
    setHabilitar("")
    escolherPalavra()
    console.log("palavraListada", palavraListada)
    listinha = palavraListada.map((letra)=> letra = "_")
    setLista(listinha)
    setListaTracos(lista)
    setDivOculta(<div className="tracos" data-test="word">{listinha.join(" ")}</div>)
  }

    return(
    <div className="topo">
        <img src={`assets/${imgForca}.png`} data-test="game-image"/>
        <div className="direita">
            <button onClick={iniciarJogo} data-test="choose-word">Escolher Palavra</button>
            {divOculta}
        </div>
    </div>
    )
}