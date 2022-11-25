
export default function Letras(props){

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const pList = props.palavraListada
  const lTracos = props.listaTracos
  const setLiTracos = props.setListaTracos

  console.log("lista", props.lista)

  function verificarLetra(letra){
    const index = pList.indexOf(letra)
    const listaPosicoes = []
    for(let i=0; pList.length>i;i++){
      let letraDaVez = pList[i]
      if(letraDaVez===letra){
        listaPosicoes.push(i)
      }
      //setLiTracos([...lTracos, lTracos[0]='a'])
      //setLiTracos([...lTracos, listaPosicoes.map((p)=> lTracos[listaPosicoes[p]]= letra)])
    }
    const novaArray = [...lTracos]
    //console.log("novaArray", novaArray)
    console.log(lTracos)

    if(index !== -1){
      console.log("")
    }
    //console.log(lTracos)
    console.log(pList)
    //console.log(pList.indexOf(letra))

  }

    return(
        <div className="alfabeto">
          {alfabeto.map((l)=> 
          (<button disabled = {props.habilitar} value={l} onClick={()=> verificarLetra(l)}>{l}</button>))}
        </div>
    )
}