import { Link } from "react-router-dom";

export default function ListarAnimais(props) {
    function excluir() {
        fetch(`http://localhost:8080/animais/${props.animais.id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(props.animais)
            })
            .then(x => {
                alert('Animal excluido com sucesso')
                window.location.href = "/animais/consultar"
            })
    }

    return (
        <div className="container">
            <hr />
            <div className="card col-md-12 card-animal">
                <div className="card-body">
                    <h3 className="card-title, text-center">{props.animais.nome}</h3>
                   <img src="https://vidanimal.com.br/wp-content/uploads/cachorro-terapia-beagle.jpg"
                    className="card-img-top" alt="..."></img>
                    <div className="card-text">
                        <span className="fw-bold">Nome: </span>
                        <span>{props.animais.nome}</span>
                    </div>
                <div className="card-text">
                    <span className="fw-bold">Idade: </span>
                    <span>{props.animais.idade}</span>
                </div>
                <div className="card-text">
                    <span className="fw-bold">Porte: </span>
                    <span>{props.animais.porte}</span>
                </div>
                <div className="card-text">
                    <span className="fw-bold">Espécie: </span>
                    <span>{props.animais.especie}</span>
                </div>
                <div className="card-text">
                    <span className="fw-bold">Gênero: </span>
                    <span>{props.animais.genero}</span>
                </div>
                <div className="card-text">
                    <span className="fw-bold">Saúde: </span>
                    <span>{props.animais.saude}</span>
                </div>
                </div>
                <div className="d-flex flex-row-reverse">
               <button onClick={excluir} className="btn btn-danger">Excluir</button>
                <Link to={`/animais/editar/${props.animais.id}`}><button className="btn btn-primary">Editar</button></Link>
            </div>
            </div>
        </div>
    )
}