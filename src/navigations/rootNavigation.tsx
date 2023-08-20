import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/authStack';
import {stackNames} from '../constants/navigationConstants/stackNames';
import Tabs from './tabNavigation';
import {navConfig} from './navigationConfig';
import BookingStack from './stacks/bookingStack';
import SpaceshipsScreen from '../activities/spaceships/spaceshipsScreen';
import Destination from '../activities/destination/destinationScreen';

const RootStackNav = createNativeStackNavigator();

const RootNavigationStack = () => {
  return (
    <NavigationContainer>
      <RootStackNav.Navigator>
        {/* <RootStackNav.Screen
          name={stackNames.AUTH_STACK}
          component={AuthStack}
          options={{
            ...navConfig,
            animation: 'slide_from_right',
          }}
        /> */}
        <RootStackNav.Screen
          name={'Spaceship'}
          component={Destination}
          options={{
            ...navConfig,
            animation: 'slide_from_right',
          }}
        />
        {/* <RootStackNav.Screen
          name={stackNames.TABS_STACK}
          component={Tabs}
          options={navConfig}
        />
        <RootStackNav.Screen
          name={stackNames.BOOKING_STACK}
          component={BookingStack}
          options={{
            ...navConfig,
            animation: 'slide_from_right',
          }}
        /> */}
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigationStack;
