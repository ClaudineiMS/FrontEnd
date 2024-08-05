import React from 'react';
import '../styles/Card.css'; 

const Card = ({ data }) => {
  return (
    <div className="card-container">
      {data && data.length > 0 ? (
        data.map((fornecedor, index) => (
          <div className="card" key={index}>
            <p><img src={fornecedor.logo} alt={fornecedor.nome} style={{ width: '100px', height: 'auto' }} /></p>
            <h4>{fornecedor.nome}</h4>
            <p><strong>Limite Mínimo:</strong> {fornecedor.limite_mínimo} kWh</p>
            <p><strong>Clientes:</strong> {fornecedor.numero_total_de_clientes}</p>
            <p><strong>Custo:</strong> {fornecedor.custo}</p>
            <p><strong>Avaliação:</strong> {fornecedor.avaliação_média_dos_clientes}</p>
            <p><strong>UF:</strong> {fornecedor.estado_de_origem} </p>
          </div>
        ))
      ) : (
          data == null ? null : <p>Nenhum fornecedor encontrado.</p>
      )}
    </div>
  );
};

export default Card;
