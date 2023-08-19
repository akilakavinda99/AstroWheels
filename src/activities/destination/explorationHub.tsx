import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { stackNames } from '../../constants/navigationConstants/stackNames';
import { screenNames } from '../../constants/navigationConstants/screenNames';
import {
  Text,
  View,
} from 'react-native';

import "./destinationStyle"
import { style, styletwo } from './destinationStyle';
import Back from '../back/backScreen';
import DestinationContent from './destinationContent';


export const ExplorationHub = ({navigation}:any) => {
    return (
      <View >
         
        <Text style={styletwo.maintitle}>Specifications</Text>
  
        <View style={styletwo.topsection}>
          <DestinationContent
          title="Valles Marineris"
          para="Travelers could explore its towering cliffs, winding valleys, and potentially discover evidence of Mars' ancient geological and hydrological history."/>
        </View>
  
        <View style={styletwo.topsectiontwo}>
        <DestinationContent
          title="Curiosity Rover Landing Sit"
          para="Have you ever dreamed of walking in the footsteps of pioneers? You can make that dream a reality by visiting the  iconic landing site of the Curiosity Rover on Mars"/>
        </View>
  
        <View style={styletwo.bottomsection}>
  
          <View style={styletwo.subsection}>
          <DestinationContent
          title="Lunar retregeg"
          para="Nisl posuere suspendisse enim vulputate nunc vitae"/>
          </View>
  
          <View style={styletwo.subsection}>
          <DestinationContent
          title="Lunar retregeg"
          para="Nisl posuere suspendisse enim vulputate nunc vitae"/>
          </View>
        </View>
      </View>
    );
  };