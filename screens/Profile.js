import React, { Component } from 'react';
import { Text, View } from 'react-native';

import TitleText from '../components/header/TitleText';
import TopTitle from '../components/header/TopTitle';

import styles from '../style';

class Profile extends Component {
  render() {
    return (
      <View style={styles.profile}>
        <TopTitle text={'PROFILE'} />
        <TitleText text={'SIGN-IN'} />
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
      </View>
    )
  }
}

export default Profile;
