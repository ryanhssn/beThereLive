import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { LinearGradient} from 'expo';

import { TopTitle, TitleText } from '../components/header';
import styles from '../style';

class Spotlight extends Component {
  render() {
    return (
      <ScrollView style={[styles.profile, {flex: 1}]}>
          <TopTitle text={'ARTISTS'} />
          <TitleText text={'SPOTLIGHT'} />
          <Image
            style={styles.carousel}
            source={require('../img/Carousel.png')} />

            <ScrollView style={{flex:1}} horizontal={true}>
              <View style={localStyles.ticketPortal}>
                <Text style={localStyles.ticketText}>AUGUST 10-26, 2017</Text>
                <View style={localStyles.artistCont}>
                  <Text style={localStyles.artistText}>Corinne Bailey Rae</Text>
                  <Text style={localStyles.artistDesc}>HOLLYWOOD BOWL</Text>
                </View>
              </View>
              <View style={localStyles.ticketPortal}>
                <Text style={localStyles.ticketText}>SEPTEMBER 2, 2017</Text>
                <View style={localStyles.artistCont}>
                  <Text style={localStyles.artistText}>James Morrison</Text>
                  <Text style={localStyles.artistDesc}>EL REY THEATRE</Text>
                </View>
              </View>
              <View style={localStyles.ticketPortal}>
                <Text style={localStyles.ticketText}>AUGUST 10-26, 2017</Text>
                <View style={localStyles.artistCont}>
                  <Text style={localStyles.artistText}>Corinne Bailey Rae</Text>
                  <Text style={localStyles.artistDesc}>HOLLYWOOD BOWL</Text>
                </View>
              </View>
              <View style={localStyles.ticketPortal}>
                <Text style={localStyles.ticketText}>AUGUST 10-26, 2017</Text>
                <View style={localStyles.artistCont}>
                  <Text style={localStyles.artistText}>Corinne Bailey Rae</Text>
                  <Text style={localStyles.artistDesc}>HOLLYWOOD BOWL</Text>
                </View>
              </View>
            </ScrollView>

            <View style={{flex:1}}>

              <View style={localStyles.trendView}>
                <Image
                  style={localStyles.trendImg}
                  source={require('../img/Image_trending1.png')}/>

                  <LinearGradient
                    colors={['#da2df9', '#000']}
                    start={[1, 1]}
                    end={[1, 0]}
                    style={localStyles.gradientStyle}>
                  <View style={localStyles.trendCont}>
                    <Text style={localStyles.trendHead}>T R E N D I N G</Text>
                    <View style={localStyles.trendAlbum}>
                        <Text style={localStyles.artistText}>Janelle Monae</Text>
                        <Text style={localStyles.albumSong}>MAKE ME FEEL</Text>
                    </View>
                  </View>
                  </LinearGradient>

              </View>
              <View style={localStyles.trendView}>
                <Image
                  style={localStyles.trendImg}
                  source={require('../img/Image_trending2.png')}/>
                  <LinearGradient
                    colors={['#da2df9', '#000']}
                    start={[1, 1]}
                    end={[1, 0]}
                    style={localStyles.gradientStyle}>
                  <View style={localStyles.trendCont}>
                    <Text style={localStyles.trendHead}>T R E N D I N G</Text>
                    <View style={localStyles.trendAlbum}>
                      <Text style={localStyles.artistText}>5 Seconds of Summer</Text>
                      <Text style={localStyles.albumSong}>WANT YOU BACK</Text>
                    </View>
                  </View>
                  </LinearGradient>

              </View>

              <View style={localStyles.trendView}>
                <Image
                  style={localStyles.trendImg}
                  source={require('../img/Image_trending1.png')}/>

                  <LinearGradient
                    colors={['#da2df9', '#000']}
                    start={[1, 1]}
                    end={[1, 0]}
                    style={localStyles.gradientStyle}>
                  <View style={localStyles.trendCont}>
                    <Text style={localStyles.trendHead}>T R E N D I N G</Text>
                    <View style={localStyles.trendAlbum}>
                      <Text style={localStyles.artistText}>Janelle Monae</Text>
                      <Text style={localStyles.albumSong}>MAKE ME FEEL</Text>
                    </View>
                    </View>
                    </LinearGradient>

                  </View>

            </View>

      </ScrollView>
    )
  }
}

localStyles = {
  gradientStyle: {
    width: 250
  },
  ticketPortal: {
    backgroundColor: '#da2df9',
    width: 150,
    height: 100,
    marginHorizontal: 2,
    marginVertical: 2
  },
  ticketText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
    margin: 7
  },
  artistCont: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 7
  },
  artistText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',

  },
  artistDesc: {
    color: 'white',
    fontSize: 12,
  },
  trendView: {
    backgroundColor: '#da2df9',
    flexDirection: 'row',
    marginVertical: 5
  },
  trendCont: {
    flexDirection: 'column',
    marginHorizontal: 5,
    marginVertical: 8
  },
  trendHead: {
    color: 'white',
    fontSize: 12,
    opacity: 0.5,
    marginVertical: 5
  },
  trendImg: {
    width: '40%'
  },
  albumSong: {
    color: 'white',
    fontSize: 10
  }

}

export default Spotlight;
