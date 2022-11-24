import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";


export default function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const [habilitar, setHabilitar] = useState("disabled")

  return (
    <div className="conteudo">
      <Jogo habilitado={habilitar} onClick={()=>setHabilitar("")}/>
      <Letras lista={alfabeto} habilitado={habilitar}/>
      <Chute/>
    </div>
  );
}

