import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenNames} from '../constants/navigationConstants/screenNames';
import SelectPlanetScreen from '../activities/selectPlanet/selectPlanetScreen';
import ProfileScreen from '../activities/profile/profileScreen';
import LocationScreen from '../activities/location/locationScreen';
import SettingsScreen from '../activities/settings/settingsScreen';
import {navConfig} from './navigationConfig';
import RocketSvg from '../../assets/svgData/tabBarIcons/rocket';
import Profile from '../../assets/svgData/tabBarIcons/profile';
import Location from '../../assets/svgData/tabBarIcons/location';
import Settings from '../../assets/svgData/tabBarIcons/settings';
import Place from '../../assets/svgData/tabBarIcons/location';
const Tab = createBottomTabNavigator();
// screens related to the tab bar
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.Select_Planet}
      screenOptions={{
        tabBarActiveTintColor: '#0BE9A6',
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 20,
          height: 55,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name={screenNames.Select_Planet}
        component={SelectPlanetScreen}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => (
            <RocketSvg focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.Profile_Screen}
        component={ProfileScreen}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => <Profile focused={focused} />,
        }}
      />
      <Tab.Screen
        name={screenNames.Location_Screen}
        component={LocationScreen}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => <Place focused={focused} />,
        }}
      />
      <Tab.Screen
        name={screenNames.Settings_Screen}
        component={SettingsScreen}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => (
            <Settings focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
