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
  Button
} from 'react-native';

import "./destinationStyle"
import { style, styletwo } from './destinationStyle';
import Back from '../back/backScreen';

export const Geology = ({navigation}: any) => {
    return (
      <View >
        
  
  
        <Text style={style.title}>Exploring Geological Diversity</Text>
        <Text style={style.para}>Unveil the Rich Geological Tapestry of Valles Marineris</Text>
  
        <Image
          source={require('../../../assets/images/chart.png')} 
          style={style.chartimg}
        />
  
        <Text style={style.shiptitle}>Explore Our Space ships</Text>
  
        <Pressable style={style.button} onPress={()=> navigation.navigate(stackNames.BOOKING_STACK,{screen:screenNames.StartExplore_Screen})}>
        <Text style={style.textbtn}>Book your Vehicle</Text>
      </Pressable>
        {/* <Button title='submit' onPress={()=> navigation.navigate(stackNames.BOOKING_STACK,{screen:screenNames.StartExplore_Screen})}></Button> */}
      </View>
    );
  };
  