import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../activities/login/loginScreen';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {navConfig} from '../navigationConfig';
import loginScreen from '../../activities/login/loginScreen';
import LoginScreenScaning from '../../activities/login/loginScreenScaning';
import LoginScreenSuccess from '../../activities/login/loginScreenSuccess';

const AuthStackNav = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNav.Navigator>
      <AuthStackNav.Screen
        name={screenNames.Login_Screen}
        component={LoginScreen}
        options={navConfig}
      />
      <AuthStackNav.Screen
        name={screenNames.Login_ID_Screen}
        component={LoginScreenScaning}
        options={navConfig}
      />
      <AuthStackNav.Screen
        name={screenNames.Login_Success}
        component={LoginScreenSuccess}
        options={{
          headerShown: false,
        }}
      />
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;
