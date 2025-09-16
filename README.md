# Finance-Web

Finance-Web é uma aplicação web para controle financeiro pessoal, permitindo cadastro, login, registro de transações e visualização de dashboard.

## Estrutura do Projeto

```
FinanceWeb/
├── client/      # Frontend React
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── server/      # Backend Node.js/Express
│   ├── routes/
│   ├── public/
│   ├── db.js
│   ├── app.js
│   ├── package.json
│   └── ...
```

## Tecnologias Utilizadas

- **Frontend:** React, Vite, Axios, React Router
- **Backend:** Node.js, Express, MySQL, bcrypt
- **Banco de Dados:** MySQL

## Como rodar o projeto

### Backend

1. Instale as dependências:
   ```powershell
   cd server
   npm install
   ```
2. Configure o banco de dados MySQL usando o script `Finance.sql`.
3. Inicie o servidor backend:
   ```powershell
   node app.js
   ```
   O backend estará disponível em `http://localhost:5500`.

### Frontend

1. Instale as dependências:
   ```powershell
   cd client
   npm install
   ```
2. Inicie o frontend:
   ```powershell
   npm run dev
   ```
   O frontend estará disponível em `http://localhost:5173`.

## Funcionalidades

- Cadastro de usuários
- Login
- Dashboard com transações
- Registro de novas transações (entrada/saída)
- Integração segura entre frontend e backend

## Estrutura de Pastas Importantes

- `client/src/Register.jsx`: Tela de cadastro
- `client/src/Login.jsx`: Tela de login
- `client/src/Dashboard.jsx`: Dashboard
- `client/src/Transaction.jsx`: Cadastro de transações
- `server/routes/authRoutes.js`: Rotas de autenticação
- `server/db.js`: Configuração do banco
- `server/Finance.sql`: Script do banco

## Observações

- Certifique-se de que o MySQL está rodando e configurado corretamente.
- Inicie o backend antes do frontend para garantir a comunicação.
- As portas padrão são 5500 (backend) e 5173 (frontend).

## Licença

Projeto para fins educacionais.
