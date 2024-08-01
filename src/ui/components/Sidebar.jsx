import React, { useState } from 'react';
import '../styles/SidebarStyle.css';
import { SearchButton } from '../components/Button';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCadastrarFornecedor = () => {
    window.location.href = 'http://127.0.0.1:8000/api/fornecedores/criar/'; // URL para criar um novo fornecedor
  };

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Fechar' : 'Menu'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <SearchButton
            val={"Cadastrar fornecedor"}
            typeButton={"button"} 
            styleType={'side-bar-button'}
            onClick={handleCadastrarFornecedor} 
          /> 
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
