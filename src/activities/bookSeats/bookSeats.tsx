import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
  ToastAndroid,
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
import {useAppContext} from '../../context/AppContext';
import {useNavigation} from '@react-navigation/native';
import {stackNames} from '../../constants/navigationConstants/stackNames';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {showShortToast} from '../../utiils/showToast';

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
    zoom: '175%',
  },
  {
    name: 'Pioneer',
    x: -SCREEN_WIDTH / 5,
    y: (-SCREEN_HEIGHT * 2) / 5,
    zoom: '175%',
  },
];

const BookSeats = () => {
  // const selectedDate = '2023-09-30';
  // const spaceshipId = 1;
  const {user, date, spaceShip} = useAppContext();
  const navigation = useNavigation();

  const [activeScreen, setActiveScreen] = useState('Starter');
  const [activeSeat, setActiveSeat] = useState<string | null>(null); // [prefix][index]

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [spaceshipId, setSpaceshipId] = useState<number | null>(null);
  const [accountBalance, setAccountBalance] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  const [starterSeats, setStarterSeats] = useState<Array<Seat>>([]);
  const [explorerSeats, setExplorerSeats] = useState<Array<Seat>>([]);
  const [pioneerSeats, setPioneerSeats] = useState<Array<Seat>>([]);

  const [position, setPosition] = useState({
    x: packages[0].x,
    y: packages[0].y,
  });

  const animatedPosition = new Animated.ValueXY({
    x: packages[0].x,
    y: packages[0].y,
  });

  useEffect(() => {
    if (date != null) {
      setSelectedDate(date);
    }
  }, [date]);

  useEffect(() => {
    if (spaceShip != null && spaceShip.spaceshipId != null) {
      setSpaceshipId(spaceShip.spaceshipId);
    }
  }, [spaceShip]);

  useEffect(() => {
    if (user != null && user.galacticId != null) {
      setUserId(user.galacticId);
    }
  }, [user]);

  useEffect(() => {
    setPrice(
      confirmBookingData[activeScreen as keyof typeof confirmBookingData].price,
    );
  }, [activeScreen]);

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

  // listen to firebase changes on seats of the selected spaceship
  useEffect(() => {
    if (spaceshipId !== null) {
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
    }

    return () => database().ref(`/spaceships/${spaceshipId}/seat`).off();
  }, [spaceshipId]);

  useEffect(() => {
    if (userId !== null) {
      database()
        .ref(`/users/${userId}/balance`)
        .on('value', snapshot => {
          console.log('Account balance changed');
          const balance = snapshot.val();
          setAccountBalance(balance);
        });
    }

    return () => database().ref(`/users/${userId}/balance`).off();
  }, [userId]);

  const handleBooking = async () => {
    // show toast message if there is any error
    if (userId === null) {
      showShortToast('Please login to book a seat');
      return;
    } else if (spaceshipId === null) {
      showShortToast('Please select a spaceship');
      return;
    } else if (selectedDate === null) {
      showShortToast('Please select a date');
      return;
    } else if (activeSeat === null) {
      showShortToast('Please select a seat');
      return;
    } else if (
      accountBalance === null ||
      price === null ||
      accountBalance < price
    ) {
      ToastAndroid.show('Insufficient balance', ToastAndroid.SHORT);
      return;
    }

    // remove prefix from activeSeat
    const seat = activeSeat?.substring(2);

    // get the package
    const packageid = packages.findIndex(item => item.name === activeScreen);

    // update bookedDates
    const seatRef = database().ref(
      `/spaceships/${spaceshipId}/seat/${packageid}/seats/${seat}`,
    );
    const userRef = database().ref(`/users/${userId}`);

    try {
      await seatRef.transaction((currentData: Seat) => {
        if (currentData) {
          if (currentData.bookedDates === undefined) {
            currentData.bookedDates = {};
          }
          if (currentData.bookedDates[selectedDate] === undefined) {
            currentData.bookedDates[selectedDate] = selectedDate;

            console.log('Booked', currentData.bookedDates);
            setActiveSeat(null);

            // navigate to success screen
            navigation.navigate(stackNames.BOOKING_STACK, {
              screen: screenNames.SuccessBooking_Screen,
            });
          } else {
            // show toast message if seat is already booked
            showShortToast('Seat is already booked');
            return;
          }
        }
        return currentData;
      });

      // update user balance and bookings
      await userRef.transaction((userData: any) => {
        if (userData) {
          if (userData.balance) {
            userData.balance = userData.balance - price;
          }
          if (userData.bookings === undefined) {
            userData.bookings = [];
          }

          userData.bookings.push({
            date: selectedDate,
            seat: activeSeat,
            spaceshipId: spaceshipId,
            packageId: packageid,
            price: price,
          });
        }

        return userData;
      });
    } catch (error) {
      console.log('Error in seat booking', error);
    }
  };

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
            <SvgSpaceship style={bookingStyles.absoluteView} />
          </View>
          <View
            style={[
              bookingStyles.spaceship,
              {
                width: packages.find(item => item.name === activeScreen)?.zoom,
                height: packages.find(item => item.name === activeScreen)?.zoom,
              },
            ]}>
            <SvgSpaceshipIn style={bookingStyles.absoluteView} />
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
        availableBalance={accountBalance}
        buttonOnPress={handleBooking}
      />
    </ImageBackground>
  );
};

export default BookSeats;
