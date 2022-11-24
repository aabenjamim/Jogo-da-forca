
export default function Letras(props){
    return(
        <div className="alfabeto">
          {(props.lista).map((l)=> 
          (<button disabled = {props.habilitado}>{l}</button>))}
        </div>
    )
}