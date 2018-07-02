// @flow
import * as React from "react";
import Dahora from 'moment';
import {
  List, ListItem, Left,
  Thumbnail, Body, Text
} from "native-base";
import { urlRequest } from './../../Request';

export default class MenuUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    Dahora.locale('pt-BR');
    return (<List>
      <ListItem onPress={() => this.props.navigation.navigate('UserForm', { user: this.props.user }) }>
            <Left>
                <Thumbnail source={{ uri: this.props.user.infoapi.fotoUsuario }} />
            </Left>
            <Body style={{ marginLeft:-140 }}>
              <Text note>{ this.props.user.nome }</Text>
              <Text style={{ fontWeight: 'bold' }} note>{ this.props.user.infoapi.pacoteUsuario }</Text>
              <Text note>Desde { Dahora(this.props.user.dataEntrada).format('DD/MM/YYYY') }</Text>
            </Body>
      </ListItem>
    </List>)
      }
}
