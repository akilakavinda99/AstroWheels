import {View, Text, ImageBackground, Image} from 'react-native';
import Back from '../back/backScreen';

import {style} from './confirmBookingStyle';
import DetailsCode from './detailsCode';
import { ConfirmBooking } from '../../components/commonComponents/confirmBooking';

const ConfirmBookingScreen = () => {
  return (
   
      <ImageBackground
    style={style.backgroundImage}
    source={require('../../../assets/images/Background.png')}
  >
     <View style={style.container}>
      <Back title="Confirm booking" />
  
       <DetailsCode/>

       <Image
        source={require('../../../assets/images/imageone.png')} 
        style={style.imageone}
      />
      <View style={style.middle}>
     
        <Text style={style.middletext}>
          Cosmic wonders, distant planets, mysteries unveiled, zero gravity
          awaits...
        </Text>
      </View>

     
      </View>
      <ConfirmBooking
      title='Final Cost'
      price='1500'
      description=''
      buttonText='Confirm Payment '
      />
      </ImageBackground>
 
  );
};

export default ConfirmBookingScreen;
