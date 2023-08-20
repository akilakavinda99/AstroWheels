import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';

import './bookSeatsStyles';
import {bookingStyles} from './bookSeatsStyles';
import Back from '../back/backScreen';
import SvgSpaceship from './components/svgSpaceship';
import SvgSpaceshipIn from './components/svgSpaceshipIn';
import {PackageSection} from './components/section';
import {Seat, SeatPackage} from './types';
import {ConfirmBooking} from '../../components/commonComponents/confirmBooking';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../styles/globalStyles';
import {confirmBookingData} from './bookingScreenData';

const packages = [
  {
    name: 'Starter',
    x: 0,
    y: -80,
    zoom: '145%',
  },
  {
    name: 'Explorer',
    x: SCREEN_WIDTH / 5,
    y: (-SCREEN_HEIGHT * 2) / 5,
    zoom: '200%',
  },
  {
    name: 'Pioneer',
    x: -SCREEN_WIDTH / 5,
    y: (-SCREEN_HEIGHT * 2) / 5,
    zoom: '200%',
  },
];

const BookSeats = () => {
  const selectedDate = '2023-09-30';
  const spaceshipId = 1;
  const [activeScreen, setActiveScreen] = useState('Starter');
  const [activeSeat, setActiveSeat] = useState<String | null>(null); // [prefix][index]
  const [starterSeats, setStarterSeats] = useState<Array<Seat>>([]);
  const [explorerSeats, setExplorerSeats] = useState<Array<Seat>>([]);
  const [pioneerSeats, setPioneerSeats] = useState<Array<Seat>>([]);
  const [position, setPosition] = useState({x: 0, y: -80});

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

    setActiveSeat(null);
    setPosition({x, y});
    setActiveScreen(screen);
  };

  // useEffect(() => {
  //   moveComponent();
  // }, [activeScreen]);

  useEffect(() => {
    database()
      .ref(`/spaceships/${spaceshipId}/seat`)
      .on('value', snapshot => {
        console.log('Data changed in firebase');
        const arr = snapshot.val();

        arr.forEach((item: SeatPackage) => {
          if (item.packageId === 1) {
            setStarterSeats(item.seats);
          } else if (item.packageId === 2) {
            setExplorerSeats(item.seats);
          } else if (item.packageId === 3) {
            setPioneerSeats(item.seats);
          }
        });
      });
    // return () => database().ref(`/spaceships/1 /seat`).off('value', onValueChange);
  }, []);

  const handleBooking = () => {};

  return (
    <ImageBackground
      style={bookingStyles.backgroundImage}
      source={require('../../../assets/images/Background.png')}>
      <View style={{flex: 1, marginLeft: 20, marginRight: 20}}>
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
          style={[
            bookingStyles.animatedView,
            {
              top: position.y,
              left: position.x,
            },
          ]}>
          <View
            style={[
              bookingStyles.spaceship,
              {
                width: packages.find(item => item.name === activeScreen)?.zoom,
                height: packages.find(item => item.name === activeScreen)?.zoom,
              },
            ]}>
            <SvgSpaceship
              style={{
                position: 'absolute',
              }}
            />
          </View>
          <View
            style={[
              bookingStyles.spaceship,
              {
                width: packages.find(item => item.name === activeScreen)?.zoom,
                height: packages.find(item => item.name === activeScreen)?.zoom,
              },
            ]}>
            <SvgSpaceshipIn
              style={{
                position: 'absolute',
              }}
            />
          </View>

          {activeScreen === 'Starter' ? (
            <PackageSection
              top={'25%'}
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
          ) : activeScreen === 'Explorer' ? (
            <PackageSection
              top={'60%'}
              left={'0%'}
              width={'75%'}
              height={'75%'}
              compartmentWidth={'22%'}
              compartmentHeight={'15%'}
              prefix={'ex'}
              seats={explorerSeats}
              selectedDate={selectedDate}
              selectedSeat={activeSeat}
              selectSeat={setActiveSeat}
            />
          ) : (
            <PackageSection
              top={'60%'}
              left={'30%'}
              width={'75%'}
              height={'75%'}
              compartmentWidth={'22%'}
              compartmentHeight={'15%'}
              prefix={'pi'}
              seats={pioneerSeats}
              selectedDate={selectedDate}
              selectedSeat={activeSeat}
              selectSeat={setActiveSeat}
            />
          )}
        </Animated.View>
      </View>
      <ConfirmBooking
        title={
          confirmBookingData[activeScreen as keyof typeof confirmBookingData]
            .title
        }
        price={
          confirmBookingData[activeScreen as keyof typeof confirmBookingData]
            .price
        }
        description={
          confirmBookingData[activeScreen as keyof typeof confirmBookingData]
            .description
        }
        buttonText={
          confirmBookingData[activeScreen as keyof typeof confirmBookingData]
            .button
        }
        buttonOnPress={handleBooking}
      />
    </ImageBackground>
  );
};

export default BookSeats;
