import React, { useRef, useState } from 'react';
import logo from '../ui/themes/giphy.gif';
import { Button } from '../ui/components/Button';
import '../ui/styles/App.css';
import Sidebar from '../ui/components/Sidebar';
import Card from '../ui/components/Card';
import { GET_FORNECEDORES_BY_CONSUMO } from '../data/query';
import { useQuery } from '@apollo/client';

function App() {
  const formRef = useRef(null);
  const [consumo, setConsumo] = useState(null);
  const [TodosFornecedores, setTodosFornecedores] = useState(null);

  // Executa a consulta GraphQL quando `consumo` é definido
  const { loading, error, data } = useQuery(GET_FORNECEDORES_BY_CONSUMO, {
    variables: { consumo },
    skip: consumo === null, // Não faz a consulta se o consumo for null
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Obtém o valor do input
    const consumoInput = formRef.current.querySelector('#valor').value;

    // Função para verificar se um valor é um número
    const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

    // Tentar extrair o número do input
    const consumoValue = parseFloat(consumoInput.replace(/[^0-9.]/g, ''));

    if (isNumber(consumoValue)) {
      setConsumo(consumoValue); // Atualiza o estado para iniciar a consulta
      setTodosFornecedores(null);
    }
  };
  if ( TodosFornecedores != null && data != null){
    setConsumo(null);
    if (formRef.current) {
      formRef.current.reset(); // Reseta o formulário, limpando os campos
    }
  }
  return (
    <div className="App">
      <Sidebar setTodosFornecedores={setTodosFornecedores} setConsumo={setConsumo} formRef={formRef}/>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='main'>
        <br/>
        <form className="form" ref={formRef} onSubmit={handleSubmit}>
          <h3>Qual o seu consumo mensal de energia ?</h3>
          <input type="text" id="valor" name="valor" required />
          <Button val={"Enviar"} styleType={'submit-button'} />
        </form>
        {loading && <p>Carregando...</p>}
        {error && <p>Erro: {error.message}</p>}
        <Card data={data ? data.fornecedores : TodosFornecedores} /> 
      </div>
    </div>
  );
}

export default App;
