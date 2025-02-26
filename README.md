# Backend Cart

Este é um projeto de backend para gerenciamento de um carrinho de compras.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

## Configuração do Ambiente

1. Clone o repositório:

   <!-- ```bash
   git clone
   cd seu-repositorio
   ``` -->

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

## Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento, use o seguinte comando:

```bash
npm run dev
```

Para compilar o projeto e iniciar o servidor em produção, use:

```bash
npm run build
npm start
```
