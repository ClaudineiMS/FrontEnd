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

describe('Card Component', () => {
  // Testa se o componente exibe a mensagem "Nenhum fornecedor encontrado." quando os dados são um array vazio
  test('renders "Nenhum fornecedor encontrado" when data is an empty array', () => {
    render(<Card data={[]} />);
    expect(screen.getByText('Nenhum fornecedor encontrado.')).toBeInTheDocument();
  });

  // Testa se o componente não exibe nada quando os dados são null
  test('renders nothing when data is null', () => {
    render(<Card data={null} />);
    expect(screen.queryByText('Nenhum fornecedor encontrado.')).toBeNull();
  });

  // Testa se o componente não exibe o nome do fornecedor quando a propriedade nome está ausente
  test('does not render fornecedor name if name property is missing', () => {
    const mockDataWithoutName = [{ logo: 'logo.png', limite_mínimo: 100, numero_total_de_clientes: 10, custo: 50, avaliação_média_dos_clientes: 4.5 }];
    render(<Card data={mockDataWithoutName} />);
    expect(screen.queryByText('Fornecedor 1')).toBeNull(); // Assume que "Fornecedor 1" era esperado
  });

  // Testa se o componente lida com uma fonte de imagem inválida de maneira adequada
  test('handles invalid image source gracefully', () => {
    const mockDataWithInvalidImage = [{ logo: '', nome: 'Fornecedor 1', limite_mínimo: 100, numero_total_de_clientes: 10, custo: 50, avaliação_média_dos_clientes: 4.5 }];
    render(<Card data={mockDataWithInvalidImage} />);
    // Verifica se o atributo src da imagem está vazio
    expect(screen.getByAltText('Fornecedor 1')).toHaveAttribute('src', '');
  });

  // Testa se o componente lida com dados malformados de maneira adequada
  test('handles malformed data gracefully', () => {
    const malformedData = [{ nome: 'Fornecedor 1', limite_mínimo: 'unknown', numero_total_de_clientes: 'unknown', custo: 'unknown', avaliação_média_dos_clientes: 'unknown' }];
    render(<Card data={malformedData} />);
    expect(screen.getByText('Fornecedor 1')).toBeInTheDocument();
  });

  // Testa se o estilo aplicado ao container do card está correto
  test('applies correct styles to the card container', () => {
    render(<Card data={mockData} />);
    const cardContainer = screen.getByClass('card-container'); 
    expect(cardContainer).toHaveStyle('display: flex'); 
  });
});
