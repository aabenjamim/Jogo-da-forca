import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";


export default function App() {

  const [habilitar, setHabilitar] = useState("disabled")
  const [palavraListada, setPalavraListada] = useState([])

  let lista;

  const [listaTracos, setListaTracos] = useState([])
  const [divOculta, setDivOculta] = useState("")

  return (
    <div className="conteudo">
      <Jogo divOculta={divOculta} palavraListada={palavraListada}
      setHabilitar={setHabilitar} setListaTracos={setListaTracos} setDivOculta={setDivOculta}
      lista={lista} setPalavraListada={setPalavraListada} listaTracos={listaTracos}/>
      <Letras habilitar={habilitar} palavraListada={palavraListada} lista={lista}/>
      <Chute/>
    </div>
  );
}

