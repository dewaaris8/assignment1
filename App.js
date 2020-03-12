
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="white" barStyle="dark-content">

        </StatusBar>
        <ImageBackground source={require('./image/orangnyanyi.jpg')} style={{
          flex: 1
        }}>

          <View style={{
            flexDirection: "row"
          }}>
            <Text style={styles.judul}>Discover</Text>
            <TouchableOpacity style={{
              marginHorizontal: 190
            }} onPress={() => {
              alert('halo');
            }}>
              <Image source={require("./image/menu1.png")} style={styles.menu}></Image>
            </TouchableOpacity>
          </View>

          <Text style={styles.trending}>
            Playlist - Trending Music
        </Text>
          <Text style={styles.desc}>
            This is What's Trending Today :
        </Text>
          <Text style={styles.desc2}>
            Falling - Trevor Daniel
        </Text>
          <TouchableOpacity onPress={() => {
            alert('Nanti musiknya ke play !')
          }}>
            <Image source={require("./image/play.png")} style={styles.btnplay}>

            </Image>
          </TouchableOpacity>
          <View style={{
            flexDirection: "row",
          }}>
            <Text style={styles.spotlight}>
              Spotlight On
        </Text>
            <TouchableOpacity onPress={() => {
              alert('nanti keliatan playlist musicnya !')
            }}>
              <Text style={styles.show}>
                Show All
        </Text>
            </TouchableOpacity>

          </View>
          <View style={{
            flexDirection: "row",
            flex: 1,
            marginTop: 10,
          }}>
            <View style={{
              flex: 1,
              backgroundColor: 'transparent',
              marginHorizontal: 20,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: "white",
            }}>

            </View>
            <View style={{
              flex: 1,
              backgroundColor: 'transparent',
              marginHorizontal: 20,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: "white",
            }}>

            </View>
          </View>
        </ImageBackground>
        
      </>
    )
    }
}
const styles = StyleSheet.create({
  judul: {
    color: "#ffffff",
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },

  menu: {
    fontWeight: "bold",
    marginTop: 60,

  },

  trending: {
    color: "#F6C60D",
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 200,
    marginHorizontal: 20,
    fontSize: 20,
  },

  desc: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    marginHorizontal: 20,
  },
  desc2: {
    color: "#F6C60D",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    marginHorizontal: 20,
  },

  btnplay: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  spotlight: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    marginHorizontal: 20,
    marginTop: 20,
  },
  show: {
    color: "#F6C60D",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    marginHorizontal: 140,
    marginTop: 20,
  },
})
export default App;
