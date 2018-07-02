import React, { Component } from 'react';
import {
  Animated,
  View
} from 'react-native';

export default class FadeInView extends Component {
  state = {
    // Valor inicial da animação
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    // Tempo da animação
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1, // Opacidade: 1
        duration: 5000, // Anima por 5 segundos
      }
    ).start(); // Inicia a animação
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View // View especial com animação
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          opacity: fadeAnim, // Recebe o valor da animação
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
