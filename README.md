Passos para configuração e execução do projeto

1 - Instalar Node.js
  > Versão utilizada https://nodejs.org/dist/v8.11.1/node-v8.11.1-x64.msi

2 - Seguir instruções em: https://facebook.github.io/react-native/docs/getting-started.html
  > Aba Building Projects with Native Code
  > The React Native CLI
  > Seguir as instruções para instalar o android studio

3 - Configure as variáveis de ambiente:
  > ANDROID_HOME e JAVA_HOME + path

4 - Rodar o projeto pelo Node.js command prompt
  # cd apppadrao
  # react-native run-android

5 - Esse projeto já esta configurado com:
  > DialogProgress (Componente modal igual ao do android)
  > Axios (Responsável pela conexão http com servidor (post/get))
  > PushNotification (Já está configurado para rodar em plano de fundo)
  > Redux (Responsável por compartilhar variáveis entre telas)
  > ReduxForm (Ajuda na validação dos formulários com React e Redux)

6 - Abra a pasta ./src/App para fazer as suas configurações do projeto
