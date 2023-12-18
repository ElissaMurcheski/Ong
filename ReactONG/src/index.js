import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import CadastrarAnimais from './pages/animal/cadastrarAnimais';
import ConsultarAnimais from './pages/animal/consultarAnimais';
import EdicaoAnimal from './pages/animal/editarAnimal';


const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/animais/cadastrar",
        element: <CadastrarAnimais />
      },
      {
        path: "/animais/consultar",
        element: <ConsultarAnimais />
      },
      {
        path: "/animais/editar/:idAnimal",
        element: <EdicaoAnimal />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);


