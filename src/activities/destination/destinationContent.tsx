import { View, Text , ImageBackground} from 'react-native'
import { style, styletwo } from './destinationStyle';

const DestinationContent = ({title,para}: any) => {
  return (
    <View>
       <ImageBackground
          style={styletwo.backgroundimg}
          source={require('../../../assets/images/bgone.png')}
        >
          <Text style={styletwo.title}>{title}</Text>
          <Text style={styletwo.para}>
            {para}
          </Text>
          </ImageBackground>
    </View>
  )
}

export default DestinationContent