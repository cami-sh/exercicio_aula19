import React, { useRef } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  let inputNome = useRef<HTMLInputElement>(null)
  let inputIdade = useRef<HTMLInputElement>(null)
  let inputEmpresa = useRef<HTMLInputElement>(null)
  let inputPhone = useRef<HTMLInputElement>(null)

  const enviarDados = () => {

    const meuNome = inputNome.current?.value
    const minhaIdade = inputIdade.current?.value
    const minhaEmpresa = inputEmpresa.current?.value
    const meuTelefone = inputPhone.current?.value

    axios.post("http://localhost:4000/usuarios", {
      name: meuNome,
      age: minhaIdade,
      company: minhaEmpresa,
      phone: meuTelefone,
    })
  }

  return (
    <div className="App">

      <input type="text" ref = {inputNome} placeholder='Nome'/>
      <input type="text" ref = {inputIdade} placeholder='Idade'/>
      <input type="text" ref = {inputEmpresa} placeholder='Empresa'/>
      <input type="text" ref = {inputPhone} placeholder='Telefone'/>

      <button onClick={enviarDados}>Enviar</button>

    </div>
  );
}

export default App;
