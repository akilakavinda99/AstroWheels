import { View, Text, Image } from 'react-native'
import Back from '../back/backScreen';

import {style} from './confirmBookingStyle';

const DetailsCode = () => {
  return (
    <View>
         <View style={style.card}>
        <View style={style.box}>
          <View style={style.sectionone}>
            <Text style={style.vehicle}>SP4892-X</Text>

            <Text style={style.planet}>Earth</Text>
            <Text style={style.location}>Colombo</Text>

            <Text style={style.time}>09:25 AM</Text>
            <Text style={style.date}>Fri, sep</Text>
          </View>

          <View style={style.sectiontwo}>
            <View>
              <Text style={style.vehiclet}>5/74 - R.M.T</Text>

              <Text style={style.planett}>Mars</Text>
              <Text style={style.locationt}>Esraults</Text>

              <Text style={style.timet}>12:04 PM</Text>
              <Text style={style.datet}>Sat, sep</Text>
            </View>
          </View>
          <View style={style.line} />
        </View>
        <View style={style.codesection}>
          <Text style={style.press}>Press</Text>
          <Image
            source={require('../../../assets/images/code.png')}
            style={style.codeimg}
          />
        </View>
      </View>
    </View>
  )
}

export default DetailsCode