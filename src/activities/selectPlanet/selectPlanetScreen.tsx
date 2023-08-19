import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TouchableHighlight,
  // Easing,
} from 'react-native';
import theme from '../../theme/theme';
import {styles} from './selectPlanetStyles';
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
import Animated, {
  FlipInXUp,
  Easing,
  FadeInLeft,
  BounceInLeft,
  FadeInUp,
} from 'react-native-reanimated';

import {useEffect, useState} from 'react';

const SelectPlanetScreen = ({navigation}) => {
  const [planet, setPlanet] = useState(null);
  useEffect(() => {
    if (planet != null) {
      console.log(planet);
      navigation.navigate(stackNames.BOOKING_STACK, {
        screen: screenNames.StartExplore_Screen,
        params: {planet: planet},
      });
    }

    return () => {
      setPlanet(null);
    };
  }, [planet]);
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
            <Animated.View
              style={styles.dateDetailsDiv}
              entering={FadeInUp.duration(800).easing(Easing.ease)}>
              <Text style={styles.mainText}>GSD.2163.08.15.01.40</Text>
              <Text style={styles.subText}>You are in Earth</Text>
            </Animated.View>

            <Animated.View
              style={styles.mainDetailsDiv}
              entering={BounceInLeft.duration(1000).easing(Easing.ease)}>
              <Text style={styles.subTitle}>
                Welcome, <Text style={styles.boldText}>AstroWheels</Text>
              </Text>
              <Text style={styles.mainTitle}>Where do you want to go?</Text>
              <Text style={styles.belowText}>Choose Your Cosmic Journey</Text>
            </Animated.View>
            <TouchableHighlight
              underlayColor="#ffffff00"
              style={styles.planet7}
              onPress={() => setPlanet(7)}>
              <SvgComponent7 />
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.planet8}
              underlayColor="#ffffff00"
              onPress={() => setPlanet(8)}>
              <SvgComponent8 />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.planet6}
              underlayColor="#ffffff00"
              onPress={() => setPlanet(6)}>
              <SvgComponent6 />
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.planet5}
              underlayColor="#ffffff00"
              onPress={() => setPlanet(5)}>
              <SvgComponent5 />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.planet4}
              onPress={() => setPlanet(4)}>
              <SvgComponent4 />
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.planet3}
              underlayColor="#ffffff00"
              onPress={() => setPlanet(3)}>
              <Image
                source={require('../../../assets/image5.png')}
                style={styles.planet3}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.planet2}
              underlayColor="#ffffff00"
              onPress={() => setPlanet(2)}>
              <SvgComponent2 />
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.planet1}
              underlayColor="#ffffff00"
              onPress={() => setPlanet(1)}>
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
