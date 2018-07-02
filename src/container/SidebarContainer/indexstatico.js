// @flow
import * as React from "react";
import { connect } from "react-redux";
import { AsyncStorage, View, ListView } from 'react-native';
import {
  Container, Text, Icon,
  Left, Right, Body,
  List, ListItem, Thumbnail
} from "native-base";

const defaultavatar = require('./../../../images/default-avatar.png');

class SidebarContainer extends React.Component<Props, State> {
	constructor(props) {
        super(props);
        this.state = { item1: false, item2: false, item3: false };
  }

  render() {
    const submenu = (<View style={{ paddingLeft: 20 }}>
            <ListItem icon onPress={() => {
							       this.props.navigation.navigate('Home');
              }}>
                <Left><Icon name="home" /></Left>
                <Body><Text>Home</Text></Body>
            </ListItem>
            <ListItem icon onPress={() => {
							       this.props.navigation.navigate('List');
              }}>
                <Left><Icon name="list" /></Left>
                <Body><Text>Lista</Text></Body>
            </ListItem>
            <ListItem icon>
                <Left><Icon name="person" /></Left>
                <Body><Text>Person 3</Text></Body>
            </ListItem>
    </View>)
    return (<Container style={{ backgroundColor: '#fff', paddingTop: 20 }}>
            <View>
                <List>
                  <ListItem onPress={() => { alert('Avatar') }}>
                        <Left>
                          <Thumbnail source={ defaultavatar } />
                        </Left>
                        <Body style={{marginLeft:-110}}>
                          <Text note>Fabio Santos</Text>
                          <Text note>Analista</Text>
                          <Text note>fabio@eu.com.br</Text>
                        </Body>
                  </ListItem>
                </List>
            </View>

            <ListItem icon onPress={() => {
                    alert('Home');
                  }
                }>
                <Left><Icon name="home" /></Left>
                <Body><Text>Home</Text></Body>
            </ListItem>

            <ListItem icon onPress={() => this.setState({ item1: !this.state.item1 })}>
                <Left><Icon name="plane" /></Left>
                <Body><Text>Item 1</Text></Body>
                <Right><Icon name="md-arrow-forward" /></Right>
            </ListItem>
            {
                this.state.item1 ? submenu : null
            }
            <ListItem icon onPress={() => this.setState({ item2: !this.state.item2 })}>
                <Left><Icon name="wifi" /></Left>
                <Body><Text>Item 2</Text></Body>
                <Right><Icon name="md-arrow-forward" /></Right>
            </ListItem>
            {
                this.state.item2 ? submenu : null
            }

            <ListItem icon onPress={() => this.setState({ item3: !this.state.item3 })}>
                <Left><Icon name="bluetooth" /></Left>
                <Body><Text>Item 3</Text></Body>
                <Right><Icon name="md-arrow-forward" /></Right>
            </ListItem>
            {
                this.state.item3 ? submenu : null
            }

        </Container >);
  }
}

function bindAction(dispatch) {
	return {
	};
}
const mapStateToProps = state => ({
});
export default connect(mapStateToProps, bindAction)(SidebarContainer);
