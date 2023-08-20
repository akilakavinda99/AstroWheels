import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

import './bookSeatsStyles';
import { bookingStyles } from './bookSeatsStyles';
import Back from '../back/backScreen';
import SvgSpaceship from './components/svgSpaceship';
import SvgSpaceshipIn from './components/svgSpaceshipIn';
import { PackageSection } from './components/section';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const packages = [
  {
    name: 'Starter',
    x: 0,
    y: 0,
    zoom: "145%",
  },
  {
    name: 'Explorer',
    x: (SCREEN_WIDTH) / 5,
    y: (-SCREEN_HEIGHT * 2) / 5,
    zoom: "200%",
  },
  {
    name: 'Pioneer',
    x: -SCREEN_WIDTH / 5,
    y: (-SCREEN_HEIGHT * 2) / 5,
    zoom: "200%",
  },
];

const BookSeats = () => {
  const selectedDate = '2023-09-29';
  const [activeScreen, setActiveScreen] = useState('Starter');
  const [activeSeat, setActiveSeat] = useState('st5'); // [prefix][index]
  const [starterSeats, setStarterSeats] = useState([]);
  const [explorerSeats, setExplorerSeats] = useState([]);
  const [pioneerSeats, setPioneerSeats] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animatedPosition = new Animated.ValueXY({
    x: packages[0].x,
    y: packages[0].y,
  });

  const moveComponent = (screen: string, x: number, y: number) => {
    console.log(screen, 'selected');

    // Animated.spring(animatedPosition, {
    //   toValue: { x, y },
    //   useNativeDriver: false,
    // }).start(()=> setPosition({ x, y }) );

    setPosition({ x, y });
    setActiveScreen(screen);
  };

  // useEffect(() => {
  //   moveComponent();
  // }, [activeScreen]);

  useEffect(() => {
    database()
      .ref('/spaceships/1/seat')
      .on('value', snapshot => {
        console.log('Data changed: ', snapshot.val());
        const arr = snapshot.val();

        arr.forEach((item, index: number) => {
          if (item.packageId === 1) {
            setStarterSeats(arr[index].seats);
          } else if (item.packageId === 2) {
            setExplorerSeats(arr[index].seats);
          } else if (item.packageId === 3) {
            setPioneerSeats(arr[index].seats);
          }
        });
      });
    // return () => database().ref(`/spaceships/1 /seat`).off('value', onValueChange);
  }, []);

  return (
    <ImageBackground
      style={bookingStyles.backgroundImage}
      source={require('../../../assets/images/Background.png')}>
      <View style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
        <Back title="Vehicle Selection" />

        <View style={bookingStyles.buttonContainer}>
          {packages.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  bookingStyles.screenButton,
                  activeScreen === item.name && bookingStyles.activeButton,
                ]}
                onPress={() => moveComponent(item.name, item.x, item.y)}>
                <Text style={bookingStyles.buttonText}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* {renderActiveScreen()} */}
        <Animated.View
          style={[bookingStyles.animatedView, {
            top: position.y,
            left: position.x,
          }]}>
          <View style={[bookingStyles.spaceship, {
            width: packages.find(item => item.name === activeScreen)?.zoom,
            height: packages.find(item => item.name === activeScreen)?.zoom,
          }]}>
            <SvgSpaceship
              style={{
                position: 'absolute'
              }}
            />
          </View>
          <View style={[bookingStyles.spaceship, {
            width: packages.find(item => item.name === activeScreen)?.zoom,
            height: packages.find(item => item.name === activeScreen)?.zoom,
          }]}>
            <SvgSpaceshipIn
              style={{
                position: 'absolute'
              }}
            />
          </View>

          <PackageSection
            top={'20%'}
            width={'75%'}
            height={'75%'}
            compartmentWidth={'20%'}
            compartmentHeight={'20%'}
            prefix={'st'}
            seats={starterSeats}
            selectedDate={selectedDate}
            selectedSeat={activeSeat}
            selectSeat={setActiveSeat}
          />
          <PackageSection
            top={'80%'}
            left={'0%'}
            width={'50%'}
            height={'75%'}
            compartmentWidth={'22%'}
            compartmentHeight={'15%'}
            prefix={'ex'}
            seats={explorerSeats}
            selectedDate={selectedDate}
            selectedSeat={activeSeat}
            selectSeat={setActiveSeat}
          />
          <PackageSection
            top={'80%'}
            left={'50%'}
            width={'50%'}
            height={'75%'}
            compartmentWidth={'22%'}
            compartmentHeight={'15%'}
            prefix={'pi'}
            seats={pioneerSeats}
            selectedDate={selectedDate}
            selectedSeat={activeSeat}
            selectSeat={setActiveSeat}
          />

          {/* <Text style={{ backgroundColor: 'red' }}>Hello</Text> */}
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default BookSeats;
