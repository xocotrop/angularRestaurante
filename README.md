# Meat - Angular App Starter

## 1. Passos para começar

### Clonando o Repositório

`git clone https://github.com/cod3rcursos/meat-app-starter.git`

### Instalando as Dependências

`npm install`

### Inicializando o Servidor

`ng serve` ou `npm start`

## 2. Iniciando o Backend

### Instalando o json-server

`npm install -g json-server`

### Iniciando o serviço (raiz da aplicação)

`json-server db.json`

## Goodies

Expressões regulares usadas na validação de formulários

### Email Regex

`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

### Number Regex

`/^[0-9]*$/`

## Créditos

Todas as imagens usadas na aplicação são pertencentes a freepik.com


## alguns comandos

ng serve // Inicia o servidor para o angular

nodemon --watch backend backend/dist/server.js // Inicia o node js como background

tsc -w toda alteração feita no typescript ja compila para o json (usado bastante para o backend)

ng g c 'nome' para criar o componente
ng g c 'nome' --spec=false para criar o componente sem teste