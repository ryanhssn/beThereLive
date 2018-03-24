import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Notifications } from 'expo';

import firebase from 'firebase';
import store from './store';

import WelcomeScreen from './screens/Welcome';
import ProfileScreen from './screens/Profile';
import SpotlightScreen from './screens/Spotlight';
import ArtistsScreen from './screens/Artists';
import VenueScreen from './screens/Venue';
import AlertFeedScreen from './screens/AlertFeed';

import {firebaseInit} from './dontUpload';

export default class App extends React.Component {
  componentWillMount() {
        firebase.initializeApp(firebaseInit);
  }

  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen},
      main: {
        screen: TabNavigator({
          prfl: { screen: ProfileScreen},
          sptlght: { screen: SpotlightScreen},
          artsts: { screen: ArtistsScreen},
          vn: { screen: VenueScreen},
          alrtFd: { screen: AlertFeedScreen }
        }, {
          tabBarPosition: 'bottom',
          swipeEnabled: true,
          tabBarOptions: {
                labelStyle: { fontSize: 12 },
                showIcon: true,
                iconStyle: { width: 30, height: 30 },
            }
        })
      }
    }, {
      tabBarPosition: 'bottom',
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true,
      swipeEnabled: false,
    })

    return (
      // <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
