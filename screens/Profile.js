import React, { Component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';

import { TopTitle, TitleText } from '../components/header';
import { LoginForm } from '../components/body';

import styles from '../style';

class Profile extends Component {
  static navigationOptions = {
      title: 'PROFILE',
    };
  render() {
    return (
      <View style={styles.profile}>
          <TopTitle text={'PROFILE'} />
          <TitleText text={'SIGN-IN'} />
          <ImageBackground
            style={styles.signInBg}
            source={require('../img/Image_1_Sign-In.png')}>
          <LoginForm />
          </ImageBackground>
      </View>
    )
  }
}

export default Profile;
