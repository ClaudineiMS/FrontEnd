import React, { useState } from 'react';
import '../styles/SidebarStyle.css';
import { SearchButton } from '../components/Button';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCadastrarFornecedor = () => {
    window.location.href = 'http://localhost:8000/fornecedores/'; 
  };

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Fechar' : 'Menu'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <SearchButton
            val={"Ver forneceodres"}
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
