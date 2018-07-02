import React, { Component } from 'react';
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
export default class Detalhes extends Component {

  render() {
		return (
      <Container>
			<HeaderContainer titulo={'TELA DE DETALHES'} navigation={this.props.navigation} />
        <Content>
          <Text>Personalize como quiser</Text>
        </Content>
      </Container>
    );
	}
}
