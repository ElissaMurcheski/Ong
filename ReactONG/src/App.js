import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/animais/cadastrar'><button className='btn btn-light'>Cadastrar Animais</button></Link> &nbsp;
        <Link to='/animais/consultar'><button className='btn btn-light'>Consultar Animais Cadastrados</button></Link> 
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
