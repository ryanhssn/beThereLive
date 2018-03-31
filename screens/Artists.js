import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Button } from 'react-native';

import { LinearGradient} from 'expo';

import { TopTitle, TitleText } from '../components/header';
import Button_bh from '../components/body/Button';
import styles from '../style';

class Artists extends Component {
  static navigationOptions = {
      title: 'ARTISTS',      
    };
  render() {
    return (
      <ScrollView style={[styles.profile, {flex: 1}]}>
          <TopTitle text={'ARTISTS'} />
          <TitleText text={'ARTISTS'} />
          <Image
            style={styles.carousel}
            source={require('../img/Image_art2.png')} />

            <View style={localStyles.descArtist}>
                <Text style={localStyles.artistTitle}>JUDITH HILL</Text>
                <Text style={localStyles.artistAbout}>Mauris commodo interdum lacus ut scelerisque. Nam eleifend enim quis cursus sodales. Morbi vehicula tristique tristique. Aliquam erat volutpat. Quisque posuere in metus ac vehicula. Maecenas maximus, orci et hendrerit pharetra, orci arcu rhoncus sem, et dignissim nisl urna ac augue. Suspendisse velit est, vulputate eget hendrerit at, efficitur eget sapien. Praesent facilisis, metus id volutpat rutrum, ipsum diam scelerisque tortor, at volutpat nisi massa non magna. Pellentesque venenatis lobortis feugiat. Vivamus luctus lobortis arcu nec ullamcorper. In eu varius mi, vel sodales lacus. Quisque lobortis non magna a tempus.</Text>
            </View>

            <View style={localStyles.videoBar}>
              <Image
                style={localStyles.videoMain}
                source={require('../img/Video_Main.png')} />

              <View style={localStyles.sideVideos}>
                <Image source={require('../img/Video_1.png')} />
                <Image source={require('../img/Video_2.png')} />
                <Image source={require('../img/Video_3.png')} />
              </View>
            </View>
            <Text style={localStyles.heading}>ALBUMS</Text>
          <View style={styles.mainAlbumSection}>
            <View style={localStyles.AlbumsSec}>
              <View style={localStyles.album}>

                <Image style={{ width: '20%', marginLeft: 5 }} source={require('../img/Image_video1.png')} />
                <View style={localStyles.albumVertical}>
                  <View style={localStyles.albumSongs}>
                    <Text style={localStyles.songTitle}>AS TRAINS BY</Text>
                  </View>

                  <View style={localStyles.albumSongs}>
                    <Text style={localStyles.songTitle}>TURN UP</Text>
                  </View>

                  <View style={localStyles.albumSongs}>
                    <Text style={localStyles.songTitle}>ANGEL IN THE DARK</Text>
                  </View>

                </View>

                <LinearGradient
                  colors={['#000', '#636363']}
                  start={[1, 1]}
                  end={[1, 0]}
                  style={localStyles.gradientStyle}>
                  <Button_bh title="REGISTER" onPress={() => alert('REGISTER')} width="80"/>
               </LinearGradient>

              </View>
            </View>
            <View style={localStyles.AlbumsSec}>
              <View style={localStyles.album}>

                <Image style={{ width: '20%', marginLeft: 5 }} source={require('../img/Image_video1.png')} />
                <View style={localStyles.albumVertical}>
                  <View style={localStyles.albumSongs}>
                    <Text style={localStyles.songTitle}>AS TRAINS BY</Text>
                  </View>

                  <View style={localStyles.albumSongs}>
                    <Text style={localStyles.songTitle}>TURN UP</Text>
                  </View>

                  <View style={localStyles.albumSongs}>
                    <Text style={localStyles.songTitle}>ANGEL IN THE DARK</Text>
                  </View>

                </View>

                <LinearGradient
                  colors={['#000', '#636363']}
                  start={[1, 1]}
                  end={[1, 0]}
                  style={localStyles.gradientStyle}>
                  <Button_bh title="REGISTER" onPress={() => alert('REGISTER')} width="80"/>
               </LinearGradient>

              </View>
            </View>
            <View style={localStyles.AlbumsSec}>
              <View style={localStyles.album}>

                <Image style={{ width: '20%', marginLeft: 5 }} source={require('../img/Image_video1.png')} />
                <View style={localStyles.albumVertical}>
                  <View style={localStyles.albumSongs}>
                    <Text style={localStyles.songTitle}>AS TRAINS BY</Text>
                  </View>

                  <View style={localStyles.albumSongs}>
                    <Text style={localStyles.songTitle}>TURN UP</Text>
                  </View>

                  <View style={localStyles.albumSongs}>
                    <Text style={localStyles.songTitle}>ANGEL IN THE DARK</Text>
                  </View>

                </View>

                <LinearGradient
                  colors={['#000', '#636363']}
                  start={[1, 1]}
                  end={[1, 0]}
                  style={localStyles.gradientStyle}>
                  <Button_bh title="REGISTER" onPress={() => alert('REGISTER')} width="80"/>
               </LinearGradient>

              </View>
            </View>
          </View>
      </ScrollView>
    )
  }
}

const localStyles = {
  descArtist: {
    margin: 10,
    flexDirection: 'column'
  },
  artistTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  artistAbout: {
    color: 'white',
    fontSize: 10
  },
  videoBar: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10
  },
  videoMain: {
    width: '75%',
    marginHorizontal: 5
  },
  sideVideos: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    margin: 15
  },
  album: {
    marginHorizontal: 10,
    flexDirection: 'row',

  },
  albumVertical: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    width: '50%'
  },
  albumSongs: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  songTitle: {
    color: 'white',
    fontSize: 10,
    marginHorizontal: 10
  },
  gradientStyle: {
    height: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0
  },
  mainAlbumSection: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  AlbumsSec: {
    marginVertical: 5
  }

}

export default Artists;
