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
  Badge
} from "native-base";
import HeaderContainer from './../HeaderContainer';
const datas = [
  {
    route: "detalhes",
    text: "Item 1"
  },
  {
    route: "detalhes",
    text: "Item 2"
  },
  {
    route: "detalhes",
    text: "Item 3"
  },
  {
    route: "detalhes",
    text: "Item 4"
  },
  {
    route: "detalhes",
    text: "Item 5"
  },
];
export interface State {}
export default class ListContainer extends React.Component<Props, State> {
	render() {
		return (
      <Container>
        <HeaderContainer titulo={'LISTA DE ITENS'} navigation={this.props.navigation} />
        <Content>
        <List
          dataArray={datas}
          renderRow={data =>
            <ListItem button
              onPress={() => alert('Selecionou ' + data.text)} >
                <Left>
                  <Text>{data.text}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
            </ListItem>}
          />
        </Content>
      </Container>
    );
	}
}
