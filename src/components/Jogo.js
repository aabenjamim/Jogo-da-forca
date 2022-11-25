import palavras from "./palavras"

export default function Jogo({divOculta, palavraListada, setHabilitar, 
    setListaTracos, setDivOculta, lista}){


  function escolherPalavra(){
    let comparador = (() => Math.random() - 0.5) 
    const listaAleatoria = palavras.sort(comparador);
    const primeiraPalavra = listaAleatoria[0]
    palavraListada = primeiraPalavra.split("")
  }


  function iniciarJogo(){
    setHabilitar("")
    escolherPalavra()
    console.log(palavraListada)
    lista = (palavraListada.map((letra)=> letra = "_"))
    setListaTracos(lista)
    return setDivOculta(<div className="tracos">{lista.join(" ")}</div>)
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