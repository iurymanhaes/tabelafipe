🚀 Tabela Fipe - Consulta de Preços de Veículos
Este é um projeto desenvolvido em Next.js 15 com React, TypeScript e Material-UI, que permite consultar preços de veículos utilizando a API da Tabela Fipe.

📌 Principais Tecnologias e Pacotes Utilizados

✅ Next.js 15 → Framework para React com SSR e otimizações de performance.

✅ React 18 → Biblioteca para criação de interfaces interativas.

✅ TypeScript → Tipagem estática para maior segurança e escalabilidade do código.

✅ Material-UI (MUI) → Framework de UI para estilização e componentes pré-construídos.

✅ Context API + useReducer → Gerenciamento global de estado de forma performática.

✅ SWR → Gerenciamento de requisições HTTP com cache automático.

✅ Axios → Cliente HTTP para requisições assíncronas.

✅ ESLint & Prettier → Padronização de código e boas práticas.


📂 Estrutura do Projeto


📂 src

 ┣ 📂 components          # Componentes reutilizáveis como Autocomplete e Botões
 
 ┣ 📂 contexts            # Context API e Reducer para gerenciamento de estado
 
 ┣ 📂 hooks               # Hooks personalizados como `useFipe` e `useSwr`
 
 ┣ 📂 pages               # Páginas do projeto (Home e Result)
 
 ┣ 📂 routes              # Definição de caminhos do projeto
 
 ┣ 📂 services            # Serviços de API (FipeService)
 
 ┣ 📂 styles              # Estilizações globais do projeto
 
 ┣ 📂 types               # Definições de tipos TypeScript
 
 ┣ 📂 utils               # Funções auxiliares e helpers
 
 ┣ 📜 package.json        # Dependências do projeto

🛠 Instalação e Execução

git clone  https://github.com/iurymanhaes/tabelafipe.git

2️⃣ Instalar Dependências

cd tabelafipe

npm install

ou

yarn install

3️⃣ Executar o Projeto

npm run dev

ou

yarn dev

📌 O projeto será iniciado em http://localhost:3000


O projeto foi implantado na Vercel para melhor acessibilidade e performance.
🔗 URL do projeto: tabelafipe-pied.vercel.app
