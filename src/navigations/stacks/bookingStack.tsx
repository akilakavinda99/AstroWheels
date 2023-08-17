import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../activities/login/loginScreen';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {navConfig} from '../navigationConfig';

const BookingStackNav = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <BookingStackNav.Navigator>
      <BookingStackNav.Screen
        name={screenNames.Login_Screen}
        component={LoginScreen}
        options={navConfig}
      />
    </BookingStackNav.Navigator>
  );
};

export default AuthStack;
