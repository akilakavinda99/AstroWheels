import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/authStack';
import {stackNames} from '../constants/navigationConstants/stackNames';
import Tabs from './tabNavigation';
import {navConfig} from './navigationConfig';
import BookingStack from './stacks/bookingStack';

const RootStackNav = createNativeStackNavigator();

const RootNavigationStack = () => {
  return (
    <NavigationContainer>
      <RootStackNav.Navigator initialRouteName={stackNames.AUTH_STACK}>
        <RootStackNav.Screen
          name={stackNames.AUTH_STACK}
          component={AuthStack}
          options={{
            ...navConfig,
            animation: 'slide_from_right',
          }}
        />
        <RootStackNav.Screen
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
        />
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigationStack;
