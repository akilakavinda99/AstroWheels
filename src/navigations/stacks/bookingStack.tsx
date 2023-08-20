import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from '../../activities/login/loginScreen';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {navConfig} from '../navigationConfig';
import StartExploreScreen from '../../activities/startExplore/startExploreScreen';
import Destination from '../../activities/destination/destinationScreen';
import ConfirmBookingScreen from '../../activities/confirmBooking/confirmBookingScreen';
import SuccessBooking from '../../activities/successBooking/successBookingScreen';
import SpaceshipsScreen from '../../activities/spaceships/spaceshipsScreen';
import ArScreen from '../../activities/ar/arScreen';
import WebComponent from '../../activities/ar/webView';
import BookSeats from '../../activities/bookSeats/bookSeats';
// import loginScreen from '../../activities/login/loginScreen';

const BookingStackNav = createNativeStackNavigator();

const BookingStack = () => {
  return (
    <BookingStackNav.Navigator>
      <BookingStackNav.Screen
        name={screenNames.StartExplore_Screen}
        component={StartExploreScreen}
        options={{
          ...navConfig,
          animation: 'slide_from_right',
        }}
      />
      <BookingStackNav.Screen
        name={screenNames.Destination_Screen}
        component={Destination}
        options={navConfig}
      />
      <BookingStackNav.Screen
        name={screenNames.ConfirmBooking_Screen}
        component={ConfirmBookingScreen}
        options={navConfig}
      />
      <BookingStackNav.Screen
        name={screenNames.SuccessBooking_Screen}
        component={SuccessBooking}
        options={navConfig}
      />
      <BookingStackNav.Screen
        name={screenNames.Spaceship_Screen}
        component={SpaceshipsScreen}
        options={navConfig}
      />
      <BookingStackNav.Screen
        name={screenNames.Ar_Screen}
        component={ArScreen}
        options={navConfig}
      />
      <BookingStackNav.Screen
        name={screenNames.Web_View}
        component={WebComponent}
        options={{
          ...navConfig,
          orientation: 'landscape',
        }}
      />
      <BookingStackNav.Screen
        name={screenNames.SeatSelection_Screen}
        component={BookSeats}
        options={navConfig}
      />
    </BookingStackNav.Navigator>
  );
};

export default BookingStack;
