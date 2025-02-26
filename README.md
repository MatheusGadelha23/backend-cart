# API do Carrinho de Compras

Este é um projeto de backend para gerenciamento de um carrinho de compras.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

## Configuração do Ambiente

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusGadelha23/backend-cart.git
   cd backend-cart
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

   ```plaintext
   PORT=3000
   ```

   Você pode usar o arquivo `.env.example` como referência.

## Estrutura do Projeto

- `src/`: Contém o código-fonte do projeto.
  - `controllers/`: Controladores para gerenciar as rotas.
  - `services/`: Serviços para lógica de negócios.
  - `models/`: Modelos de dados.
  - `routes/`: Definições de rotas.

## Rotas da API

### 1. Obter Carrinho

- **Método**: `GET`
- **Rota**: `/api/cart`
- **Descrição**: Retorna o conteúdo atual do carrinho.
- **Resposta**:
  ```json
  {
    "cart": [
      {
        "name": "Product 1",
        "detail": "Lorem ipsum dolor sit amet",
        "price": 99,
        "info": "OMG This just came out today!",
        "hero": "imagem1.jpg",
        "offer": "This is the latest and greatest product from Derp corp.",
        "image": "http://placehold.it/300x300/999/CCC"
      },
      ...
    ]
  }
  ```

### 2. Adicionar Produtos ao Carrinho

- **Método**: `POST`
- **Rota**: `/api/cart`
- **Parâmetros**:
  - **Body**:
    ```json
    {
      "products": [
        {
          "name": "Produto 1",
          "detail": "Detalhes do produto 1",
          "price": 100,
          "hero": "imagem1.jpg",
          "info": "Informações adicionais",
          "offer": "Oferta especial",
          "image": "http://placehold.it/300x300/777/CCC"
        },
        {
          "name": "Produto 2",
          "detail": "Detalhes do produto 2",
          "price": 150,
          "offer": "Oferta especial",
          "image": "http://placehold.it/300x300/999/CCC"
        }
      ]
    }
    ```
- **Descrição**: Adiciona um ou mais produtos ao carrinho.
- **Resposta**:
  ```json
  {
    "message": "Produto(s) adicionado(s) ao carrinho!",
    "cart": [ ... ]
  }
  ```

### 3. Remover Produtos do Carrinho

- **Método**: `DELETE`
- **Rota**: `/api/cart`
- **Parâmetros**:
  - **Body**:
    ```json
    {
      "names": ["Produto 1", "Produto 2"]
    }
    ```
- **Descrição**: Remove um ou mais produtos do carrinho com base nos nomes fornecidos.
- **Resposta**:
  ```json
  {
    "message": "Produtos removidos do carrinho.",
    "cart": [ ... ]
  }
  ```

## Erros Comuns

- **400 Bad Request**: Quando os parâmetros obrigatórios não são fornecidos.
- **404 Not Found**: Quando um produto não é encontrado no carrinho.
- **500 Internal Server Error**: Quando ocorre um erro inesperado no servidor.
