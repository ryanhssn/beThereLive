import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Welcome extends Component {
  render() {

    navigate = () => {
      this.props.navigation.navigate('main')
    }

    return (
      <View>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Button title="Take me inside!!!" onPress={navigate} />
      </View>
    )
  }
}

export default Welcome;
