export default function Letras(props){

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const palavraListada = props.palavraListada
  const palavraResposta = palavraListada.join("")
  const lista = props.lista
  const setDivOculta = props.setDivOculta
  const setLista = props.setLista
  const erros = props.erros
  const setErros = props.setErros
  const setImgForca = props.setImgForca
  const setHabilitar = props.setHabilitar
  let cor;

  function verificarLetra(letra){

    const temLetra = palavraListada.includes(letra)
    let errosAtualizados;

    for(let i=0; palavraListada.length>i;i++){
      let letraDaVez = palavraListada[i]
      if(letraDaVez===letra){
        lista[i] = letraDaVez
      } 
      setLista(lista)
    }
    if(temLetra === false){
      setErros(erros+1)
      errosAtualizados = erros + 1
      setImgForca(`forca${errosAtualizados}`)
    }

    const listaComparacao = lista.join("")

    if(listaComparacao === palavraResposta){
      cor = "green"
      setHabilitar(true)
    }

    if(errosAtualizados === 6){
      cor = "red"
      setHabilitar(true)
      setDivOculta(<div className="tracos" data-test="word" style={{color: cor}}
      data-answer={`${palavraListada.join("")}`}>{palavraResposta}</div>)
      return
    }

    setDivOculta(<div className="tracos" data-test="word" style={{color: cor}}
    data-answer={`${palavraListada.join("")}`}>{lista.join(" ")}</div>)


    let elemento = document.getElementById(`${letra}`)
    elemento.setAttribute("disabled", "disabled")
    console.log(elemento)

    }  

  return(
      <div className="alfabeto">
        {alfabeto.map((l)=> 
        (<button disabled = {props.habilitar} onClick={()=> verificarLetra(l)} id={l}
        data-test="letter">{l}</button>))}
      </div>
    )
}