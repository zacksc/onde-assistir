# Onde Assistir

<p align="center">
  <img src="./assets/demoTelas.gif" alt="Demonstração do App" width="600"/>
</p>

## 🎯 Objetivo do App

O **Onde Assistir** é um aplicativo que permite ao usuário buscar filmes e séries e descobrir em quais plataformas de streaming eles estão disponíveis. Ele visa facilitar o acesso a informações centralizadas sobre serviços como Netflix, Prime Video, Disney+, entre outros, economizando tempo e evitando a busca manual em cada plataforma.

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework principal para desenvolvimento do app mobile.
- **Expo**: Ferramenta que agiliza o processo de desenvolvimento e testes no React Native.
- **TypeScript**: Linguagem usada para maior segurança e organização do código.
- **Snack (Expo)**: Versão interativa do projeto hospedada na web.

🔗 Teste agora mesmo no navegador pelo Expo Snack:  
[https://snack.expo.dev/@zackintosh/github.com-zacksc-onde-assistir](https://snack.expo.dev/@zackintosh/github.com-zacksc-onde-assistir)

## 🚀 Como Rodar o Projeto Localmente

1. **Pré-requisitos**:

   - Node.js instalado
   - Gerenciador de pacotes (npm ou yarn)
   - Expo CLI: `npm install -g expo-cli`

2. **Clone o repositório**:

   ```bash
   git clone https://github.com/zacksc/onde-assistir.git
   cd onde-assistir
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Inicie o app**:

   ```bash
   expo start
   ```

5. **Acesse**:
   - Use um emulador, ou
   - Escaneie o QR Code com o app **Expo Go** no seu celular.

## 📁 Estrutura de Pastas

```bash
onde-assistir/
├── assets/
├── src/
│   ├── components/     # Componentes reutilizáveis (ex: botões, cards)
│   ├── models/         # Modelos de dados (tipagens, interfaces)
│   ├── screens/        # Telas da aplicação (ex: Home, Detalhes)
│   ├── services/       # Serviços e integrações com APIs externas
│   ├── viewmodels/     # Lógica intermediária entre views e services
│   ├── utils/          # Funções utilitárias (ex: truncate)
│   └── routes.tsx      # Definição e configuração das rotas
├── App.tsx             # Arquivo principal do app
├── app.json            # Configurações do projeto Expo
├── index.d.ts          # Tipagens globais
├── package.json        # Dependências e scripts
├── package-lock.json   # Lockfile do npm
└── tsconfig.json       # Configuração do TypeScript
```

## 🏗️ Sobre a Arquitetura

O projeto segue uma arquitetura modular e escalável, separando responsabilidades em diferentes pastas:

- **components/**: Componentes reutilizáveis e desacoplados.
- **models/**: Tipos e interfaces para os dados do app.
- **screens/**: Telas principais da aplicação.
- **services/**: Comunicação com APIs externas e persistência local.
- **viewmodels/**: Lógica intermediária para manipulação de dados entre services e views.
- **utils/**: Funções utilitárias reutilizáveis em todo o projeto.

Essa organização facilita manutenção, testes, reuso de código e escalabilidade.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
