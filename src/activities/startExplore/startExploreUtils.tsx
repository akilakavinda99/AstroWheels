import {screenNames} from '../../constants/navigationConstants/screenNames';
import {stackNames} from '../../constants/navigationConstants/stackNames';

export const onPressStartExplore = (navigation: any) => {
  navigation.navigate(stackNames.BOOKING_STACK, {
    screen: screenNames.Destination_Screen,
  });
};
