import React from 'react';
import '../styles/Card.css'; 

const Card = ({ data }) => {
  return (
    <div className="card-container">
      {data && data.length > 0 ? (
        data.map((fornecedor, index) => (
          <div className="card" key={index}>
            <p><img src={fornecedor.logo} alt={fornecedor.nome} style={{ width: '100px', height: 'auto' }} /></p>
            {/*Correção para o caso de teste 4 quando ele falhar */}
            {/* <h4>{fornecedor.nome ? fornecedor.nome : 'Nome não disponível'}</h4> */}
            <h4>{fornecedor.nome}</h4>
            <p><strong>Limite Mínimo:</strong> {fornecedor.limiteMinimo} kWh</p>
            <p><strong>Clientes:</strong> {fornecedor.numeroTotalDeClientes}</p>
            <p><strong>Custo:</strong> {fornecedor.custo}</p>
            <p><strong>Avaliação:</strong> {fornecedor.avaliacaoMediaDosClientes}</p>
            <p><strong>UF:</strong> {fornecedor.estadoDeOrigem} </p>
          </div>
        ))
      ) : (
          data == null ? null : <p>Nenhum fornecedor encontrado.</p>
      )}
    </div>
  );
};

export default Card;
