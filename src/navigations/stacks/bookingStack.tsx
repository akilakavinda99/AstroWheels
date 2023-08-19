import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from '../../activities/login/loginScreen';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {navConfig} from '../navigationConfig';
import StartExploreScreen from '../../activities/startExplore/startExploreScreen';
import Destination from '../../activities/destination/destinationScreen';
import ConfirmBookingScreen from '../../activities/confirmBooking/confirmBookingScreen';
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
    </BookingStackNav.Navigator>
  );
};

export default BookingStack;
