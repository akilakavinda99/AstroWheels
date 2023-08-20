import * as React from 'react';
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
  ScrollView,
} from 'react-native';

import './destinationStyle';
import {style, styletwo} from './destinationStyle';
import Back from '../back/backScreen';
import Animated, {
  FlipInXUp,
  Easing,
  FadeInLeft,
  BounceInLeft,
  FadeInUp,
  FadeIn,
  ZoomIn,
} from 'react-native-reanimated';
import {Dropdown} from 'react-native-element-dropdown';
import {useState} from 'react';
import DateSelectionModel from './dateSelectionModel';
export const Geology = ({navigation}: any) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            {
              position: 'absolute',
              backgroundColor: 'white',
              left: 22,
              top: 8,
              zIndex: 999,
              paddingHorizontal: 8,
              fontSize: 14,
            },
            isFocus && {color: 'blue'},
          ]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  return (
    // <ScrollView>
    <View>
      <View>
        <Text style={style.title}>Exploring Geological Diversity</Text>
        <Text style={style.para}>
          Unveil the Rich Geological Tapestry of Valles Marineris
        </Text>
      </View>

      <Animated.Image
        entering={ZoomIn.duration(400).easing(Easing.ease)}
        source={require('../../../assets/images/chart.png')}
        style={style.chartimg}
      />

      <Text style={style.shiptitle}>Explore Our Space ships</Text>
      <DateSelectionModel visibility={true} value={value} setValue={setValue} />

      <Pressable
        style={style.button}
        onPress={() =>
          navigation.navigate(stackNames.BOOKING_STACK, {
            screen: screenNames.StartExplore_Screen,
          })
        }>
        <Text style={style.textbtn}>Book your Vehicle</Text>
      </Pressable>

      {/* <Button title='submit' onPress={()=> navigation.navigate(stackNames.BOOKING_STACK,{screen:screenNames.StartExplore_Screen})}></Button> */}
    </View>

    // </ScrollView>
  );
};
