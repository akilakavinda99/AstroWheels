import {View, Text, ImageBackground} from 'react-native';
import {style, styletwo} from './destinationStyle';

const DestinationContent = ({title, para, image}: any) => {
  return (
    <View>
      <ImageBackground
        style={styletwo.backgroundimg}
        source={{
          uri: image,
        }}>
        <Text style={styletwo.title}>{title}</Text>
        <Text style={styletwo.para}>{para}</Text>
      </ImageBackground>
    </View>
  );
};

export default DestinationContent;
