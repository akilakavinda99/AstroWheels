import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { stackNames } from '../../constants/navigationConstants/stackNames';
import { screenNames } from '../../constants/navigationConstants/screenNames';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
  Button
} from 'react-native';

import "./destinationStyle"
import { style, styletwo } from './destinationStyle';
import Back from '../back/backScreen';
import { Geology } from './geologyInsights';
import { ExplorationHub } from './explorationHub';



const Tab = createBottomTabNavigator();

export default function Destination() {

  const [activeScreen, setActiveScreen] = React.useState('Screen2');

const renderActiveScreen = () => {
  if (activeScreen === 'Screen2') {
    return <ExplorationHub />;
  } else if (activeScreen === 'Screen3') {
    return <Geology/>;
  }
};
  return (
  
    // <ImageBackground
    //   style={styletwo.backgroundImage}
    //   source={require('../../../assets/images/Background.png')}>
    // <View>
    //   <Geology />
    // </View>
    //   </ImageBackground>

    <ImageBackground
    style={styletwo.backgroundImage}
    source={require('../../../assets/images/Background.png')}
  >
    <View style={{ flex: 1, marginLeft:20, marginRight:20}}>
      <Back title="Planet Destination" />

      <View style={styletwo.buttonContainer}>
        <TouchableOpacity
          style={[
            styletwo.screenButton,
            activeScreen === 'Screen2' && styletwo.activeButton,
          ]}
          onPress={() => setActiveScreen('Screen2')}
        >
          <Text style={styletwo.buttonText}>Exploration Hub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styletwo.screenButton,
            activeScreen === 'Screen3' && styletwo.activeButton,
          ]}
          onPress={() => setActiveScreen('Screen3')}
        >
          <Text style={styletwo.buttonText}>Geology Insights</Text>
        </TouchableOpacity>
      </View>

      {renderActiveScreen()}
    </View>
  </ImageBackground>
  
  );
}

