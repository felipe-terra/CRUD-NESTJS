<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descrição

API CRUD simples desenvolvida com [NestJS](https://github.com/nestjs/nest) para gerenciamento de usuários. Este projeto implementa as operações básicas de:

- Criação de usuários
- Consulta de usuários (individual ou lista completa)
- Atualização de dados
- Remoção de usuários

Tecnologias utilizadas:
- NestJS como framework backend
- TypeORM para operações com banco de dados
- Class-validator para validação de dados

## Configuração do Projeto

```bash
$ npm install
# ambiente de desenvolvimento
$ npm run start

# modo de observação
$ npm run start:dev

# ambiente de produção
$ npm run start:prod


# testes unitários
$ npm run test

# testes e2e
$ npm run test:e2e

# cobertura de testes
$ npm run test:cov