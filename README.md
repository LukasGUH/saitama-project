# saitama-project

1. [Descrição](#1-descrição)
2. [Inicio rápido](#2-inicio-rápido)

## 1. Descrição

O Saitama-project é uma API que visa prover informações sobre animes e criação de listas para os animes do usuário.

Este projeto é codificado em [Javascript](<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript>) e utiliza as tecnologias [NodeJS](<https://pt.wikipedia.org/wiki/Node.js>), [Express](<https://expressjs.com/pt-br/>) e [TypeScript](<https://www.typescriptlang.org/>).

## 2. Inicio rápido

Para rodar o projeto, lembre-se de ter as seguintes ferramentas instaladas:

  - node
  - npm
  - Rancher Desktop ou Docker Desktop
    Obs.: No caso do Rancher Desktop utilizar a versão do dockerd e não do containerd.

Com todas essas ferramentas instaladas execute os seguintes comandos dentro do diretório raiz do projeto.

O primeiro comando irá instalar todas as dependências necessárias para o projeto.

``` bash
npm install
```

O segundo comando irá realizar o build da aplicação criando o diretório dist no projeto.

``` bash
npm run build
```

O terceiro comando depende de algumas configurações iniciais, sendo elas:

 - Em seu arquivo .env adicione as seguintes tags:
    - MONGO_URL: mongodb://mongo:27017/saitama-project
    - PORT=8000
    - VERSION=1.0.0
    - LOG_LEVEL=info

Após isso poderá executar o terceiro comando que é:

``` bash
docker-compose up --build
```

E então terá o projeto executando na porta 8000, e portanto você pode verificar se ele subu com sucesso acessando o endereço abaixo:

```
localhost:8000/
```
