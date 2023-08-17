import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../activities/login/loginScreen';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {navConfig} from '../navigationConfig';

const AuthStackNav = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNav.Navigator>
      <AuthStackNav.Screen
        name={screenNames.Login_Screen}
        component={LoginScreen}
        options={navConfig}
      />
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;
