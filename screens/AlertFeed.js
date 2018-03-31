import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TopTitle, TitleText } from '../components/header';
import { LinearGradient } from 'expo' ;

import styles from '../style';

class AlertFeed extends Component {
  static navigationOptions = {
      title: 'ALERTS FEED',      
    };
  render() {
    return (
      <ScrollView style={[styles.profile, {flex: 1}]}>
          <TopTitle text={'ALERTS FEED'} />
          <TitleText text={'ALERTS FEED'} />
          <View style={{flex: 1, flexDirection: 'column'}}>
          <LinearGradient
            colors={['#000', '#303133', '#000']}
            start={[1, 1]}
            end={[1, 0]}
            style={localStyles.feedCont}>
              <Text style={localStyles.alertText}>JACK JOHNSON -  At the Hollywood Bowl. SUN, 27 AUG 2017.</Text>
              <Text style={localStyles.alertDesc}>Vestibulum posuere facilisis faucibus. Cras lobortis in velit eu dapibus. Nunc scelerisque libero non dui iaculis dapibus vitae non dolor. Cras augue mi, consequat ac leo non, lobortis maximus purus</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#000', '#303133', '#000']}
            start={[1, 1]}
            end={[1, 0]}
            style={localStyles.feedCont}>
              <Text style={localStyles.alertText}>CORINNE BAILEY - At the the WILTERN. SAT, 26 SEPT. 2017</Text>
              <Text style={localStyles.alertDesc}>Pellentesque a diam elit. Sed faucibus dictum velit a sagittis aucibus dictum velit a sagittis.</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#000', '#303133', '#000']}
            start={[1, 1]}
            end={[1, 0]}
            style={localStyles.feedCont}>
              <Text style={localStyles.alertText}>ROBERT GLASPER - At the EL REY THEATER. SUN 27 AUG 2017</Text>
              <Text style={localStyles.alertDesc}>Etiam blandit, dolor at dapibus tempus, dolor nisl maximus metus, at feugiat mauris eros quis lorem. Pellentesque hendrerit sagittis pulvinar</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#000', '#303133', '#000']}
            start={[1, 1]}
            end={[1, 0]}
            style={localStyles.feedCont}>
              <Text style={localStyles.alertText}>JAMIE CULLUM - LARGO at the CORONET. SUN 27 AUG 2017</Text>
              <Text style={localStyles.alertDesc}>Vestibulum cursus nibh odio, vitae finibus diam maximus eu dapibus tempus, dolor nisl maximus metus.</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#000', '#303133', '#000']}
            start={[1, 1]}
            end={[1, 0]}
            style={localStyles.feedCont}>
              <Text style={localStyles.alertText}>JACK JOHNSON -  At the Hollywood Bowl. SUN, 27 AUG 2017.</Text>
              <Text style={localStyles.alertDesc}>Vestibulum posuere facilisis faucibus. Cras lobortis in velit eu dapibus. Nunc scelerisque libero non dui iaculis dapibus vitae non dolor. Cras augue mi, consequat ac leo non, lobortis maximus purus</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#000', '#303133', '#000']}
            start={[1, 1]}
            end={[1, 0]}
            style={localStyles.feedCont}>
              <Text style={localStyles.alertText}>CORINNE BAILEY - At the the WILTERN. SAT, 26 SEPT. 2017</Text>
              <Text style={localStyles.alertDesc}>Pellentesque a diam elit. Sed faucibus dictum velit a sagittis aucibus dictum velit a sagittis.</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#000', '#303133', '#000']}
            start={[1, 1]}
            end={[1, 0]}
            style={localStyles.feedCont}>
              <Text style={localStyles.alertText}>ROBERT GLASPER - At the EL REY THEATER. SUN 27 AUG 2017</Text>
              <Text style={localStyles.alertDesc}>Etiam blandit, dolor at dapibus tempus, dolor nisl maximus metus, at feugiat mauris eros quis lorem. Pellentesque hendrerit sagittis pulvinar</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#000', '#303133', '#000']}
            start={[1, 1]}
            end={[1, 0]}
            style={localStyles.feedCont}>
              <Text style={localStyles.alertText}>JAMIE CULLUM - LARGO at the CORONET. SUN 27 AUG 2017</Text>
              <Text style={localStyles.alertDesc}>Vestibulum cursus nibh odio, vitae finibus diam maximus eu dapibus tempus, dolor nisl maximus metus.</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    )
  }
}

const localStyles = {
  feedCont: {
    paddingHorizontal: 10,
    marginTop: -20,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  alertText: {
    color: '#e53100',
    fontSize: 12,
  },
  alertDesc: {
    color: 'white',
    fontSize: 12
  }
}

export default AlertFeed;
