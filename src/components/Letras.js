export default function Letras(props){

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const pList = props.palavraListada
  const lista = props.lista
  const setDivOculta = props.setDivOculta
  const divOculta = props.divOculta
  const setLista = props.setLista
  const erros = props.erros
  const setErros = props.setErros
  const imgForca = props.imgForca
  const setImgForca = props.setImgForca

  function verificarLetra(letra){
    const temLetra = pList.includes(letra)

    for(let i=0; pList.length>i;i++){
      let letraDaVez = pList[i]
      if(letraDaVez===letra){
        lista[i] = letraDaVez
      } 
      setLista(lista)
    }
    if(temLetra === false){
      setErros(erros+1)
      const errosAtualizados = erros + 1
      setImgForca(`forca${errosAtualizados}`)
      console.log("erros", errosAtualizados)
    }
    setDivOculta(<div className="tracos">{lista.join(" ")}</div>)
    }
  

  return(
      <div className="alfabeto">
        {alfabeto.map((l)=> 
        (<button disabled = {props.habilitar} onClick={()=> verificarLetra(l)}>{l}</button>))}
      </div>
    )
}