import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import {style} from '../confirmBooking/confirmBookingStyle';
import './ticketViewStyle'
import Back from '../back/backScreen';
import { styles } from './ticketViewStyle';
import TicketContent from './ticketContent';

const TicketViewScreen = () => {
  return (
    <ImageBackground
    style={style.backgroundImage}
    source={require('../../../assets/images/Background.png')}
  >
    <View style={styles.container}>

    <Back title="List of Tickets" />
      
     <TicketContent
     fromplanet="Earth"
     toplanet="Mars"
     />
     <TicketContent
     fromplanet="Earth"
     toplanet="Mars"
     />
    </View>
    </ImageBackground>
  )
}

export default TicketViewScreen