# 🎲 D&D Quiz App

Aplicativo de quiz temático de Dungeons & Dragons desenvolvido com React Native e Expo.

---

## 📋 Sobre

**Avaliação 1** da disciplina de **Desenvolvimento Multiplataforma para Dispositivos Móveis**  
**Instituição:** IFSP — Instituto Federal de São Paulo, Campus São Carlos  

---

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [react-native-safe-area-context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)

---

## 🚀 Como executar

**Pré-requisitos:** Node.js e Expo Go instalado no celular

```bash
# Instalar dependências
npm install

# Iniciar o projeto
npx expo start
```

Escaneie o QR Code com o Expo Go no celular.

## 📁 Estrutura do projeto
```hyper-quiz-app/
├── assets/              # Imagens do app
├── components/
│   ├── HomeScreen.js    # Tela inicial
│   ├── QuizScreen.js    # Tela do quiz
│   └── ResultScreen.js  # Tela de resultado
├── constants/
│   └── theme.js         # Cores e estilos globais
├── database/
│   └── db.js            # Criação do banco e perguntas
└── App.js               # Componente raiz e lógica do jogo
```
