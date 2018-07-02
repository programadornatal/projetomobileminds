// @flow
import * as React from "react";
import {
  Header, Item, Text, Button,
  Icon, Left, Right, Body,
  ListItem, Input
} from "native-base";
import { View } from 'react-native';
import { get, urlRequest } from './../../Request';
import SubMenuBar from './submenubar';
import { connect } from "react-redux";
import { saveMenu, alternaMenu } from './actions';

class MenuItem extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          busca: '',
          iconesubmenu: 'md-arrow-forward',
          menu: [],
          filtro: [],
          selecionado: true
        };
  }
  componentWillMount() {
      // Carrega o menu principal da aplicação
      get('menu.php',
        (res) => {
          // inicia a lista com um valor padrão
          this.setState({ menu: res.data, filtro: res.data });
        },
        (err) => {
          alert('Erro ao carregar menu');
        });
  }
  searchUpdated(term) {
    // faz o filtro na lista do menu
    this.setState({ filtro: this.state.menu.filter((texts) =>
       texts.text.toLowerCase().includes(term.toLowerCase()))
    });
  }
  toggleMenu(item) {
    // controle abre e fecha do menu
    this.props.alternaMenu(item, this.state.selecionado);
    this.setState({ selecionado: !this.state.selecionado });
  }
  
  render() {
    const seta = (<Right><Icon name={ this.state.iconesubmenu } /></Right>);
    return (
      <View>
      <Header searchBar rounded>
        <Item>
          <Icon active name="search" />
          <Input
            placeholder="Busca no menu"
            value={ this.state.busca }
            onChangeText={(busca) => {
              this.setState({busca});
              this.searchUpdated(busca);
            }} />
          <Button transparent onPress={() => {
            this.setState({ busca: ''});
            this.searchUpdated('');
          }} >
              <Icon active name='close-circle' />
          </Button>
        </Item>
      </Header>
      {
      this.state.filtro.map((menu) => {
      return (
        <View key={ menu.id }>
        <ListItem icon onPress={() => {
                if(menu.rota === 0) {
                  // Caso selecione um submenu
                  this.toggleMenu(menu.item);
                } else if (menu.rota === 1) {
                  // Caso seja o botão de sair
                  this.props.navigation.pop();
                } else {
                  // Abri telas diretamente do menu selecionado
                  this.props.navigation.navigate(menu.rota.toString());
                }
            }}>
            <Left><Icon name={ menu.iconname } style={[{ color: menu.iconcolor}]} /></Left>
            <Body><Text style={[{ color: menu.textcolor }]} >{ menu.text }</Text></Body>
            {
              /*
                // Verifica se é um submenu e adiciona o icone de seta
              */
              menu.rota === 0 ? seta : null
            }
        </ListItem>
            <View style={{ paddingLeft: 20 }}>
            {
              /*
                // Verifica se o menu foi selecionado e adiciona o SubMenuBar a visualização
              */
              this.props.menuaberto ?
              (menu.item === this.props.menuitem ?
                (<SubMenuBar navigation={ this.props.navigation } submenu={ menu.submenu} />)
                : null)
              : null
            }
            </View>
          </View>
        );
      })
    }
    </View>)
  }
}

// Controle do item selecionado enviado para o redux
function bindAction(dispatch) {
	return {
    alternaMenu: (item, selecionado) => dispatch(alternaMenu(item, selecionado))
  }
}

// deixa disponivel os itens do menu para a aplicação
const mapStateToProps = state => ({
  menuitem: state.menureducer.item,
  menuaberto: state.menureducer.aberto
});
export default connect(mapStateToProps, bindAction)(MenuItem);
