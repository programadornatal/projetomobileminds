import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import LoginContainer from './container/LoginContainer';
import HomeContainer from './container/HomeContainer';
import ListContainer from './container/ListContainer';
import DetalhesContainer from './container/DetalhesContainer';
import TesteContainer from './container/TesteContainer';
import UserFormContainer from './container/UserFormContainer';
import SidebarContainer from './container/SidebarContainer';
import SplashContainer from './container/SplashContainer';

// Configuração do Menu Lateral e as páginas que ele vai abrir na direita
const Drawer = DrawerNavigator(
{
  // Define nome a ser chamado no navigate e seu componente
  Home: { screen: HomeContainer },
  List: { screen: ListContainer },
  Detalhes: { screen: DetalhesContainer },
  UserForm: { screen: UserFormContainer },
},
{
  // Ao iniciar o menu lateral qual tela abre primeiro
  initialRouteName: 'Home',

  // Define o conteúdo do menu lateral
  contentComponent: props => <SidebarContainer {...props} />,

}
);

// Configuração de outras telas que não precisam de Menu Lateral
const App = StackNavigator(
  {
  Splash: { screen: SplashContainer },
  Login: { screen: LoginContainer },
  Teste: { screen: TesteContainer },
  Drawer: { screen: Drawer },
},
  {
  // Define qual tela abre primeiro
  initialRouteName: 'Login',

  // Define que não é necessário usar o header padrão
  headerMode: 'none',

}
);

/*
	# Define qual dos itens aparece primeiro
	# Como nessa aplicação fazemos a utilização do menu lateral, foi necessário
	# chama-la na const App, se a aplicação abri-se diretamente a home com Menu
	# poderia ser utilizado abaixo somente <Drawer /> ao inves de <App />
*/
export default () => (
 <Root>
		<App />
 </Root>
);
