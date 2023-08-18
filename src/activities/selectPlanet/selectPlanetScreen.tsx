import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TouchableHighlight,
} from 'react-native';
import theme from '../../theme/theme';
import {styles} from './selectPlanetStyles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackNames} from '../../constants/navigationConstants/stackNames';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import SvgComponent1 from '../../../assets/svgData/planet1';
import SvgComponent2 from '../../../assets/svgData/planet2';
import SvgComponent3 from '../../../assets/svgData/planet3';
import SvgComponent4 from '../../../assets/svgData/planet4';
import SvgComponent5 from '../../../assets/svgData/planet5';
import SvgComponent6 from '../../../assets/svgData/planet6';
import SvgComponent7 from '../../../assets/svgData/planet7';
import SvgComponent8 from '../../../assets/svgData/planet8';

const SelectPlanetScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/background.png')}
          resizeMode="cover"
          style={styles.bgimage}>
          {/* inner container common for all screens */}
          {/* Keep this as the main contaier  */}
          <View style={styles.innerContainer}>
            <View style={styles.dateDetailsDiv}>
              <Text style={styles.mainText}>GSD.2163.08.15.01.40</Text>
              <Text style={styles.subText}>You are in Earth</Text>
            </View>

            <View style={styles.mainDetailsDiv}>
              <Text style={styles.subTitle}>
                Welcome, <Text style={styles.boldText}>AstroWheels</Text>
              </Text>
              <Text style={styles.mainTitle}>Where do you want to go?</Text>
              <Text style={styles.belowText}>Choose Your Cosmic Journey</Text>
            </View>

            <TouchableHighlight
              underlayColor={theme.colors.gray.gray900}
              style={styles.planet7}
              onPress={() => console.log(7)}>
              <SvgComponent7 />
            </TouchableHighlight>

            <TouchableHighlight style={styles.planet8}>
              <SvgComponent8 />
            </TouchableHighlight>
            <TouchableHighlight style={styles.planet6}>
              <SvgComponent6 />
            </TouchableHighlight>

            <TouchableHighlight style={styles.planet5}>
              <SvgComponent5 />
            </TouchableHighlight>
            <TouchableHighlight style={styles.planet4}>
              <SvgComponent4 />
            </TouchableHighlight>

            <TouchableHighlight style={styles.planet3}>
              <Image
                source={require('../../../assets/image5.png')}
                style={styles.planet3}
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.planet2}>
              <SvgComponent2 />
            </TouchableHighlight>

            <TouchableHighlight style={styles.planet1}>
              <Image
                source={require('../../../assets/image6.png')}
                style={styles.planet1}
              />
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default SelectPlanetScreen;
