import React, { useState } from 'react';
import '../styles/SidebarStyle.css';
import { Button } from '../components/Button';
import { useQuery } from '@apollo/client';
import { GET_ALL_FORNECEDORES } from '../../data/query';

const Sidebar = ({ setTodosFornecedores, setConsumo, formRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fetchData, setFetchData] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { data } = useQuery(GET_ALL_FORNECEDORES, {
    skip: !fetchData, // Só execute a consulta se fetchData for true
  });

  const handleCadastrarFornecedor = () => {
    setFetchData(true); // Define fetchData como true para executar a consulta
  };

  const handleClean = () => {
    setTodosFornecedores(null);
    setFetchData(false); 
    setConsumo(null);
    if (formRef.current) {
      formRef.current.reset(); // Reseta o formulário, limpando os campos
    }
  };

  React.useEffect(() => {
    if (data) {
      setTodosFornecedores(data.fornecedores);
    }
  }, [data, setTodosFornecedores]);

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Fechar' : 'Menu'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <Button
            val={"Ver fornecedores"}
            typeButton={"button"}
            styleType={'side-bar-button'}
            onClick={handleCadastrarFornecedor}
          />
          <Button
            val={"Limpar fornecedores"}
            typeButton={"button"}
            styleType={'side-bar-button'}
            onClick={handleClean}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
