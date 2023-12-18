import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EdicaoAnimal() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [porte, setPorte] = useState('')
    const [especie, setEspecie] = useState('')
    const [genero, setGenero] = useState('')
    const [saude, setSaude] = useState('')

    const { idAnimal } = useParams()

    function cancelar(){
        window.location.href = "/animais/consultar"
    }

    function salvar() {
        let obj = { id: idAnimal, nome, idade, porte, especie, genero, saude }
        fetch(`http://localhost:8080/animais/${idAnimal}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            })
            .then(x => {
                alert('Animal editado com sucesso')
                window.location.href = "/animais/consultar"
            })
    }

    useEffect(() => {
        fetch(`http://localhost:8080/animais/${idAnimal}`)
            .then(data => data.json())
            .then(response => {
                setNome(response.nome)
                setIdade(response.idade)
                setPorte(response.porte)
                setEspecie(response.especie)
                setGenero(response.genero)
                setSaude(response.saude)
            })
    }, [])


    return (

        <div className="container, caixa">
            <h2 className="text-center, fw-bold">Editar Animal: {nome} </h2>
            <label className="form-label, fw-bold">Informe Nome</label>
            <input className="form-control" type="text" placeholder="Informe nome" value={nome} onChange={txt => setNome(txt.target.value)}></input>

            <label className="form-label, fw-bold">Informe Idade</label>
            <input className="form-control" type="text" placeholder="Informe idade" value={idade} onChange={txt => setIdade(txt.target.value)}></input>

            <label className="form-label, fw-bold">Informe Porte</label>
            <input className="form-control" type="text" placeholder="Informe porte" value={porte} onChange={txt => setPorte(txt.target.value)}></input>

            <label className="form-label, fw-bold">Informe Espécie</label>
            <input className="form-control" type="text" placeholder="Informe espécie" value={especie} onChange={txt => setEspecie(txt.target.value)}></input>

            <label className="form-label, fw-bold">Informe Gênero</label>
            <input className="form-control" type="text" placeholder="Informe gênero" value={genero} onChange={txt => setGenero(txt.target.value)}></input>

            <label className="form-label, fw-bold">Informe Saúde</label>
            <input className="form-control" type="text" placeholder="Informe a saúde" value={saude} onChange={txt => setSaude(txt.target.value)}></input>

            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar} className="btn btn-primary">Salvar</button>
                <button onClick={cancelar} className="btn btn-danger">Cancelar</button>
            </div>
        </div>

    )

}