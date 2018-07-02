// @flow
import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Toast,
  Badge,
  View,
  Item,
  Input
} from "native-base";
import Modal from "react-native-modal";
import MenuItem from './../SidebarContainer/menuitem';

const datas = [
  {
    route: "detalhes",
    text: "Cafe"
  },
  {
    route: "detalhes",
    text: "Banana"
  },
  {
    route: "detalhes",
    text: "Pao"
  },
  {
    route: "detalhes",
    text: "Ovo"
  },
  {
    route: "detalhes",
    text: "Mingal"
  },
];

export default class HeaderContainer extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      typeheader: 0,
      filtro: datas
    };
  }
  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  searchUpdated(term) {
    this.setState({ filtro: datas.filter((texts) =>
      texts.text.toLowerCase().includes(term.toLowerCase()))
    });
  }

  renderModalContent = () => (<Modal isVisible={this.state.isModalVisible}>
    <Header rounded>
        <Button transparent onPress={() => this.toggleModal()} >
            <Text>Fechar</Text>
        </Button>
    </Header>
        <Content style={{backgroundColor: '#fff'}}>
        {/*
          <List
              dataArray={ this.state.filtro } renderRow={data => {
                return (<ListItem>
                          <Body>
                            <Text>{ data.text }</Text>
                          </Body>
                        </ListItem>)
              }}
            />
        */}
          <MenuItem navigation={ this.props.navigation } />
        </Content>
    </Modal>);

	render() {
      return (<Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")} >
            <Icon active name="menu" />
          </Button>
        </Left>
        <Body style={{
            paddingLeft: 10,
            flex: 3
          }}>
          <Title>{ this.props.titulo }</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => {
            this.toggleModal();
          }} >
          { this.renderModalContent() }
            <Icon active name="search" />
          </Button>
        </Right>
      </Header>)
  }
}
