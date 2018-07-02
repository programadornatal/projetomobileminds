import React, { Component } from 'react';
import {
  View,
  Image,
  Button,
  StatusBar
} from 'react-native';

import FadeInView from './anim';
import styles from './styles';
const logo = require('./../../../images/logofoxtraderx.png');

export default class SplashScreen extends Component {
  render() {
    return (
          <View style={styles.containersplash}>
            <StatusBar hidden />
              <FadeInView>
                <Image source={ logo } />
                {/*
                  <Text style={styles.splash}>
                      FoxTrader X
                    </Text>
                */}
              </FadeInView>
          </View>
        );
  }
}
