import {View, Text, Button} from 'react-native';

import theme from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { stackNames } from '../../constants/navigationConstants/stackNames';
import { screenNames } from '../../constants/navigationConstants/screenNames';

const SelectPlanetScreen = ({navigation}: any) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: theme.fonts.medium,
        }}>
        Screen
      </Text>
      <Button title='submit' onPress={()=> navigation.navigate(stackNames.BOOKING_STACK,{screen:screenNames.StartExplore_Screen})}></Button>
    </View>
  );
};

export default SelectPlanetScreen;
