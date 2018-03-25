import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';

import Button_bh from '../components/body/Button';

import styles from '../style';

class Welcome extends Component {
  render() {

    navigate = () => {
      this.props.navigation.navigate('main')
    }

    return (
      <View style={styles.welcomeContainer}>
        <Image
          style={{width: 320}}
          source={ require('../img/BeThereLive_Logo_FIN.png') }
        />
        <Button_bh
          title="Take me inside!!!"
          width="150"
          active={true}
          onPress={navigate}
         />
      </View>
    )
  }
}

export default Welcome;
