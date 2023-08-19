import {View, Text, ImageBackground, Image, Pressable} from 'react-native';
import Back from '../back/backScreen';
import { stackNames } from '../../constants/navigationConstants/stackNames';
import { screenNames } from '../../constants/navigationConstants/screenNames';

import {style} from '../confirmBooking/confirmBookingStyle';
import {styles} from './successBookingstyle'
import DetailsCode from '../confirmBooking/detailsCode';

const SuccessBooking = ({navigation}:any) => {
  return (
  
      <ImageBackground
        style={style.backgroundImage}
        source={require('../../../assets/images/Background.png')}>
              <View style={styles.container}>
        <Back title="Booking Confirmed" />

        <DetailsCode />

        <Image
        source={require('../../../assets/images/rocket.png')} 
        style={styles.rocket}
      />
        <Text style={styles.rockettext}>Embark your Galactic Journey</Text>

        <Pressable style={styles.button} onPress={()=> navigation.navigate(stackNames.BOOKING_STACK,{screen:screenNames.StartExplore_Screen})}>
      <Text style={styles.textbtn}>Return to Home</Text>
    </Pressable>
</View>
      </ImageBackground>
  
  );
};

export default SuccessBooking;
