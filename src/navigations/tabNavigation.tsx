import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenNames} from '../constants/navigationConstants/screenNames';
import SelectPlanetScreen from '../activities/selectPlanet/selectPlanetScreen';
import ProfileScreen from '../activities/profile/profileScreen';
import LocationScreen from '../activities/location/locationScreen';
import SettingsScreen from '../activities/settings/settingsScreen';
import {navConfig} from './navigationConfig';

const Tab = createBottomTabNavigator();
// screens related to the tab bar
const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={screenNames.Select_Planet}>
      <Tab.Screen
        name={screenNames.Select_Planet}
        component={SelectPlanetScreen}
        options={navConfig}
      />
      <Tab.Screen
        name={screenNames.Profile_Screen}
        component={ProfileScreen}
        options={navConfig}
      />
      <Tab.Screen
        name={screenNames.Location_Screen}
        component={LocationScreen}
        options={navConfig}
      />
      <Tab.Screen
        name={screenNames.Settings_Screen}
        component={SettingsScreen}
        options={navConfig}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
