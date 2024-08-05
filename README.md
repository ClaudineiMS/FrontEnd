## Branches

A branch **main** está configurada para funcionar no **Vercel**.

A branch **teste_automatizado_front** está configurada com os testes automatizados com o Jest e com os arquivos para a dockerização. Além disso também 
esta usando o Graphql.

Endpoint:

https://front-end-dusky-iota.vercel.app/


## Versão do node utilizada

18.17.0

## Para executar o projeto

Clone o repositório e execute na pasta do projeto:

```bash
npm install
```

## Testes automatizados com Jest

clone a branch teste_automatizado_front

```bash
git clone -b teste_automatizado_front https://github.com/ClaudineiMS/FrontEnd.git
cd FrontEnd
npm install
npm test
```

Testes implementados: 

Teste 1: Teste para criar o card ( ok )

Teste 2: Testa se o componente não exibe nada quando os dados são null ( ok )

Teste 3: Testa se o componente não exibe o nome do fornecedor quando a propriedade nome está ausente ( ok )

Teste 4: Espera que o texto "Nome não disponível" esteja presente quando o nome não é fornecido ( Fail )

A correção para que o teste 4 não falhe está comentada no arquivo Card.jsx


## Como dockerizar a aplicação

```bash
docker-compose build
docker-compose up
```

A aplicação está disponivel na porta 3000