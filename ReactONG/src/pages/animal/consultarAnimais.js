import { useEffect, useState } from "react"
import ListarAnimais from "./listarAnimais"


export default function ConsultarAnimais(){
    const[animais, setAnimais] = useState([])
    function consultar(){
        fetch('http://localhost:8080/animais')
        .then(data => data.json())
        .then(response => setAnimais(response))
      }
    
       useEffect(consultar, [])

    return(
        <div>
            <h2 className="text-center, fw-bold">Consulta de animais</h2>
            <div className="d-flex fle-wap">
            {
                animais.map(an => <ListarAnimais animais={an} />)
            }
            </div>
        </div>
    )
}