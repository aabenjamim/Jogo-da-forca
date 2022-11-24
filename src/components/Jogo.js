import { useState } from "react";
import palavras from "./palavras"

export default function Jogo(props){

    const [palavraOculta, setPalavraOculta] = useState("")

    function comparador() { 
        return Math.random() - 0.5; 
    }

    function iniciarJogo(){
        const listaAleatoria = palavras.sort(comparador);
        const arrayPalavra = (listaAleatoria[0]).split('');
        const listaOculta = [];
        props.onClick()
        for(let i=0; arrayPalavra.length>i; i++){
            listaOculta.push('_')
        }
        return setPalavraOculta(<div className="tracos">{listaOculta.join(" ")}</div>)
    }

    return(
    <div className="topo">
        <img src="assets/forca0.png"/>
        <div className="direita">
            <button onClick={iniciarJogo}>Escolher Palavra</button>
            {palavraOculta}
        </div>
    </div>
    )
}