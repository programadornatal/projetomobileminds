import React, { Component } from 'react';
import SplashScreen from './splash';
import LoginContainer from '../LoginContainer';

export default class SplashContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true,
    };
  }

  render() {
    setTimeout(() => {
      this.setState({ splash: false });
    }, 5000);

    if (this.state.splash) {
      return (<SplashScreen />);
    } else {
      return (<LoginContainer navigation={this.props.navigation} />);
    }
  }
}
