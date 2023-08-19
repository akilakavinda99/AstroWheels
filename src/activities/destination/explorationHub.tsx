import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {stackNames} from '../../constants/navigationConstants/stackNames';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  ToastAndroid,
  ImageBackground,
  Button,
} from 'react-native';

import './destinationStyle';
import {style, styletwo} from './destinationStyle';
import Back from '../back/backScreen';

export const ExplorationHub = ({navigation}: any) => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {

  // }, [ ]);

  return (
    <View>
      <Text style={styletwo.maintitle}>Specifications</Text>

      <View style={styletwo.topsection}>
        <ImageBackground
          style={styletwo.backgroundimg}
          source={require('../../../assets/images/bgone.png')}>
          <Text style={styletwo.title}>Valles Marineris</Text>
          <Text style={styletwo.para}>
            Travelers could explore its towering cliffs, winding valleys, and
            potentially discover evidence of Mars' ancient geological and
            hydrological history.
          </Text>
        </ImageBackground>
      </View>

      <View style={styletwo.topsectiontwo}>
        <ImageBackground
          style={styletwo.backgroundimg}
          source={require('../../../assets/images/bgone.png')}>
          <Text style={styletwo.title}>Curiosity Rover Landing Sit</Text>
          <Text style={styletwo.para}>
            Have you ever dreamed of walking in the footsteps of pioneers? You
            can make that dream a reality by visiting the iconic landing site of
            the Curiosity Rover on Mars
          </Text>
        </ImageBackground>
      </View>

      <View style={styletwo.bottomsection}>
        <View style={styletwo.subsection}>
          <ImageBackground
            style={styletwo.backgroundimg}
            source={require('../../../assets/images/bgone.png')}>
            <Text style={styletwo.title}>Lunar retregeg</Text>
            <Text style={styletwo.para}>
              Nisl posuere suspendisse enim vulputate nunc vitae
            </Text>
          </ImageBackground>
        </View>

        <View style={styletwo.subsection}>
          <ImageBackground
            style={styletwo.backgroundimg}
            source={require('../../../assets/images/bgone.png')}>
            <Text style={styletwo.title}>Lunar retregeg</Text>
            <Text style={styletwo.para}>
              Nisl posuere suspendisse enim vulputate nunc vitae
            </Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};
