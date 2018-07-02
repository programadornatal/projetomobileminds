// @flow
import * as React from "react";
import { connect } from "react-redux";
import { AsyncStorage, View, ListView } from 'react-native';
import { changeItem } from "./actions";
import { Container } from "native-base";
import MenuUser from './menuuser';
import MenuItem from './menuitem';
import { get, urlRequest } from './../../Request';
class SidebarContainer extends React.Component<Props, State> {
  render() {
    return (<Container style={{ backgroundColor: '#fff', paddingTop: 20 }}>
            <MenuUser user={ this.props.usuario } navigation={ this.props.navigation } />
            <MenuItem navigation={ this.props.navigation } />
            </Container>);
        }
}
const mapStateToProps = state => ({
  usuario: state.loginreducer.usuario
});
export default connect(mapStateToProps, null)(SidebarContainer);
