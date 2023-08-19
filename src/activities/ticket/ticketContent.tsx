import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './ticketViewStyle';
import {style} from '../confirmBooking/confirmBookingStyle';

const TicketContent = ({fromplanet, toplanet}: any) => {
  return (
    <View style={styles.card}>
   <View>
      <View style={styles.box}>
          <View style={style.sectionone}>
            <Text style={styles.book}>Booking Date</Text>
            <Text style={styles.gsd}>GSD.2163.08.15.01.40</Text>

            <Text style={style.planet}>{fromplanet}</Text>
            <Text style={style.location}>{toplanet}</Text>

            {/* <Text style={style.time}>09:25 AM</Text>
            <Text style={style.date}>Fri, sep</Text> */}
          </View>

          <View style={style.sectiontwo}>
            <View>
             
              <Text style={style.vehiclet}>SP4892-X</Text>

              <Text style={styles.planett}>Mars</Text>
              <Text style={style.locationt}>Esraults</Text>

              {/* <Text style={style.timet}>12:04 PM</Text>
              <Text style={style.datet}>Sat, sep</Text> */}
            </View>
          </View>

          </View>

        </View>
        <View style={styles.bottombox}>
               <View >
                        <Text style={styles.title}>Space ship</Text>
                        <Text style={styles.contentone}>Nebula Voyager</Text>
               </View>
               <View >
                     <Text style={styles.title}>Compartment</Text>
                     <Text style={styles.contentone}>Explorer - 10</Text>
               </View>
               <View >
                <Text style={styles.title}>Payment</Text>
                <View style={styles.pricebox}>
                <Text style={styles.price}>1500</Text>
                <Image
        source={require('../../../assets/images/gem.png')} 
        style={styles.gem}
      />
      </View>
               </View>
          </View>
      
    </View>
  )
}

export default TicketContent