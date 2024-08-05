import { gql } from '@apollo/client';

export const GET_ALL_FORNECEDORES = gql`
  query MyQuery {
    fornecedores {
        avaliacaoMediaDosClientes
        custo
        limiteMinimo
        logo
        nome
        numeroTotalDeClientes
        estadoDeOrigem
    }
}
`;

export const GET_FORNECEDORES_BY_CONSUMO = gql`
  query MyQuery($consumo: Float!) {
    fornecedores(consumo: $consumo) {
      avaliacaoMediaDosClientes
      custo
      limiteMinimo
      logo
      nome
      numeroTotalDeClientes
      estadoDeOrigem
    }
  }
`;