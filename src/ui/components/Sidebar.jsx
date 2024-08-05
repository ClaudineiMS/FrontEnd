import React, { useState } from 'react';
import '../styles/SidebarStyle.css';
import { Button } from '../components/Button';
import getAllFornecedores from '../../data/getAllFornecedores';

const Sidebar = ({setData,formRef}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCadastrarFornecedor = () => {
    if (formRef.current) {
      formRef.current.reset(); 
    }
    getAllFornecedores().then(data => {
      setData(data);
    }).catch(error => {
      console.error('Erro ao buscar os fornecedores:', error);
    });
  };

  const handleClean = () => {
    setData(null);
    if (formRef.current) {
      formRef.current.reset(); // Reseta o formulário, limpando os campos
    }
  }

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Fechar' : 'Menu'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <Button
            val={"Ver forneceodres"}
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
