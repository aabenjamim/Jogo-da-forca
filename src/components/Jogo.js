import palavras from "./palavras"

export default function Jogo({divOculta, palavraListada, setHabilitar, 
    setListaTracos, setDivOculta, lista, setPalavraListada, setLista}){
    
  function escolherPalavra(){
    let comparador = (() => Math.random() - 0.5) 
    const listaAleatoria = palavras.sort(comparador);
    const primeiraPalavra = listaAleatoria[0]
    palavraListada = primeiraPalavra.split("")
    setPalavraListada(palavraListada)
  }


  function iniciarJogo(){
    setHabilitar("")
    escolherPalavra()
    console.log("palavraListada", palavraListada)
    const listinha = (palavraListada.map((letra)=> letra = "_")).join(" ")
    setLista(listinha)
    setListaTracos(lista)
    setDivOculta(<div className="tracos">{listinha}</div>)
  }

    return(
    <div className="topo">
        <img src="assets/forca0.png"/>
        <div className="direita">
            <button onClick={iniciarJogo}>Escolher Palavra</button>
            {divOculta}
        </div>
    </div>
    )
}