// @flow
import * as React from "react";
import { connect } from "react-redux";
import { post } from "../../Request";
import { AsyncStorage, AppState, WebView } from 'react-native';
import DialogProgress from 'react-native-dialog-progress';
import PushNotification from 'react-native-push-notification';
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
import styles from "./styles";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}
const options = {
        message:"Carregando...",
        isCancelable:true
}
class HomeContainer extends React.Component<Props, State> {

  componentDidMount() {
    //DialogProgress.show(options);
  }
	// componentDidMount() {
	// 	this.configurePush();
	// }

	// configurePush() {
	// 	propsnot = this.props;
	// 	PushNotification.configure({
	// 		onNotification: function(notification) {
	// 				console.log(notification);
	// 				//console.log(notification.userInteraction);
	// 				if(notification.userInteraction) {
	// 					propsnot.changeProjeto(notification.notificationId);
	// 					propsnot.navigation.navigate('Chat');
	// 				}
	// 		},
	// 	});
	// }

	render() {
		return (<Container style={styles.container}>
			<HeaderContainer titulo={'TITULO HOME'} navigation={this.props.navigation} />
			<Content contentContainerStyle={{ flex: 1 }}>
      {/*

        <WebView
          onLoad={() => DialogProgress.hide() }
          source={{uri: 'https://esig.com.br/portalsig'}}
        />
      */}
      <Text>Carrega mais rápido</Text>
			</Content>
		</Container>);
	}
}

function bindAction(dispatch) {
	return {

	};
}

const mapStateToProps = state => ({

});
export default connect(mapStateToProps, bindAction)(HomeContainer);
