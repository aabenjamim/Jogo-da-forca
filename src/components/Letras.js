
export default function Letras(props){

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  function verificarLetra(letra){
    return
  }

    return(
        <div className="alfabeto">
          {alfabeto.map((l)=> 
          (<button disabled = {props.habilitar} onClick={()=> verificarLetra(l)}>{l}</button>))}
        </div>
    )
}