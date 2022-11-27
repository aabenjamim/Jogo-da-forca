import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";


export default function App() {

  const [habilitar, setHabilitar] = useState(true)
  const [palavraListada, setPalavraListada] = useState([])

  const [lista, setLista] = useState([])

  const [listinha, setListinha] = useState("")

  const [listaTracos, setListaTracos] = useState([])
  const [divOculta, setDivOculta] = useState("")

  const [erros, setErros] = useState(0)

  const [imgForca, setImgForca] = useState("forca0")

  const [chute, setChute] = useState([])
  const [texto, setTexto] = useState("")

  return (
    <div className="conteudo">

      <Jogo divOculta={divOculta} palavraListada={palavraListada}
      setHabilitar={setHabilitar} setListaTracos={setListaTracos} 
      setDivOculta={setDivOculta} lista={lista} setPalavraListada={setPalavraListada}
      listaTracos={listaTracos} setLista={setLista} listinha={listinha} setListinha={setListinha}
      imgForca={imgForca} setImgForca={setImgForca} setErros={setErros}/>
      
      <Letras habilitar={habilitar} setHabilitar={setHabilitar} palavraListada={palavraListada} 
      divOculta={divOculta} lista={lista} setDivOculta={setDivOculta} setLista={setLista} 
      erros={erros} setErros={setErros} imgForca={imgForca} setImgForca={setImgForca}/>

      <Chute chute={chute} setChute={setChute} texto={texto} setTexto={setTexto}
      habilitar={habilitar}/>
    </div>
  );
}

