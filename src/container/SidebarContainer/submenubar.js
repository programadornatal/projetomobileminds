// @flow
import * as React from "react";
import {
  ListItem,
  Left,
  Icon,
  Body,
  Text
} from "native-base";

export default class SubMenuBar extends React.Component {
  render() {
    return this.props.submenu.map((submenu) =>
          (<ListItem key={ submenu.id } icon onPress={() => {
                this.props.navigation.navigate(submenu.rota.toString())
              }}>
                  <Left><Icon name={ submenu.iconname } style={[{ color: submenu.iconcolor}]} /></Left>
                  <Body><Text style={[{ color: submenu.iconcolor}]} >{ submenu.text }</Text></Body>
              </ListItem>))
      }
}
