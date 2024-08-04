import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card'; 

// Mock data
const mockData = [
  {
    logo: 'logo.png',
    nome: 'Fornecedor 1',
    limite_mínimo: 100,
    numero_total_de_clientes: 10,
    custo: 50,
    avaliação_média_dos_clientes: 4.5
  }
];

const mockDataMissingName = [
    {
    logo: 'logo.png',
    nome:  '',
    limite_mínimo: 100,
    numero_total_de_clientes: 10,
    custo: 50,
    avaliação_média_dos_clientes: 4.5
    }
];

describe('Card Component', () => {
  //Teste 1: Teste para criar o card
  test('Teste 1: Tenta criar um card', () => {
    render(<Card data={mockData} />);
    expect(screen.queryByText('Nenhum fornecedor encontrado.')).toBeNull();
  });

  //Teste 2: Testa se o componente não exibe nada quando os dados são null
  test('Teste 2: Componente não exibe nada quando os dados são null', () => {
    render(<Card data={null} />);
    expect(screen.queryByText('Nenhum fornecedor encontrado.')).toBeNull();
  });

  //Teste 3: Testa se o componente não exibe o nome do fornecedor quando a propriedade nome está ausente
  test('Teste 3: Componente não exibe o nome do fornecedor quando a propriedade nome está ausente', () => {
    const mockDataWithoutName = [{ logo: 'logo.png', limite_mínimo: 100, numero_total_de_clientes: 10, custo: 50, avaliação_média_dos_clientes: 4.5 }];
    render(<Card data={mockDataWithoutName} />);
    expect(screen.queryByText('Fornecedor 1')).toBeNull(); 
  });

//Teste 4: Espera que o texto "Nome não disponível" esteja presente quando o nome não é fornecido
  test('Teste 4: Deve exibir "Nome não disponível" quando o nome do fornecedor não é fornecido', () => {
    render(<Card data={mockDataMissingName} />);
    expect(screen.queryByText('Nome não disponível')).not.toBeNull();
  });
});
