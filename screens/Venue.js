import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TopTitle, TitleText } from '../components/header';
import Carousel from '../components/body/Carousel';
import Triangle from '../components/body/Triangle';
import styles from '../style';

const {width, height} = Dimensions.get('window')

class Venue extends Component {
  static navigationOptions = {
      title: 'VENUE',
    };
  render() {

  const photos = [
    { image: require('../img/largo-at-coronet-tickets.png'), title: 'Largo At The Caronet' },
    { image: require('../img/Image_venues5.png'), title: 'The Wittern'},
    { image: require('../img/largo-at-coronet-tickets.png'), title: 'Largo At The Caronet' },
    { image: require('../img/Image_venues5.png'), title: 'The Wittern' },
    { image: require('../img/largo-at-coronet-tickets.png'), title: 'Largo At The Caronet' },
  ];


    return (
      <ScrollView style={[styles.profile, {flex: 1}]}>
          <TopTitle text={'VENUE'} />
          <TitleText text={'VENUE'} />
            <Carousel photos={photos} />

          <View style={localStyles.venueBlockCont}>

            <View style={localStyles.venueBlock}>
              <Text style={localStyles.venueTitle}>THE MINT</Text>
              <View style={localStyles.venueImageCont}>
                <Triangle />
                <Image
                  style={localStyles.venueImage}
                  source={require('../img/Image_venues1.png')} />
              </View>
            </View>
            <View style={localStyles.venueBlock}>
              <Text style={localStyles.venueTitle}>THE MINT</Text>
              <View style={localStyles.venueImageCont}>
                <Triangle />
                <Image
                  style={localStyles.venueImage}
                  source={require('../img/Image_venues2.png')} />
              </View>
            </View>
            <View style={localStyles.venueBlock}>
              <Text style={localStyles.venueTitle}>THE MINT</Text>
              <View style={localStyles.venueImageCont}>
                <Triangle />
                <Image
                  style={localStyles.venueImage}
                  source={require('../img/Image_venues3.png')} />
              </View>
            </View>
            <View style={localStyles.venueBlock}>
              <Text style={localStyles.venueTitle}>THE MINT</Text>
              <View style={localStyles.venueImageCont}>
                <Triangle />
                <Image
                  style={localStyles.venueImage}
                  source={require('../img/Image_venues4.png')} />
              </View>
            </View>

          </View>


      </ScrollView>
    )
  }
}

const localStyles = {
  venueBlockCont: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '2%'
  },
  venueBlock: {
    margin: '1%',
    flexDirection: 'column',
    width: '46%',
    height: '45%',
    borderColor: 'transparent',
    borderWidth: 2,
    marginTop: '2%',
    marginBottom: '4%'
  },
  venueTitle: {
    color: 'white',
    fontSize: 10,
    marginLeft: '40%',
    marginVertical: 5
  },
  venueImage: {
    width: '100%',
  },
  venueImageCont: {
    height: 150,
    marginLeft: '2%'
  },
  triangle: {
     width: 0,
     height: 0,
     backgroundColor: 'transparent',
     borderStyle: 'solid',
     borderTopWidth: 15,
     borderRightWidth: 15,
     borderBottomWidth: 15,
     borderLeftWidth: 15,
     borderTopColor: '#da2df9',
     borderRightColor: '#da2df9',
     borderBottomColor: 'transparent',
     borderLeftColor: 'transparent',
     position: 'absolute',
     zIndex: 99,
     right: 0,

  },
  addImage: {
    marginTop: -10,
    marginRight: -10
  }
}

export default Venue;
