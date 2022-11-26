export default function Letras(props){

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const pList = props.palavraListada
  const lista = props.lista
  const setDivOculta = props.setDivOculta
  const divOculta = props.divOculta
  const setLista = props.setLista

  function verificarLetra(letra){
    for(let i=0; pList.length>i;i++){
      let letraDaVez = pList[i]
      if(letraDaVez===letra){
        lista[i] = letraDaVez
      } 
      setLista(lista)
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