import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  ToastAndroid,
  ImageBackground,
  Image,
} from 'react-native';
import {stackNames} from '../../constants/navigationConstants/stackNames';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {styles} from './startExploreStyles';
import Back from '../back/backScreen';
import {useEffect} from 'react';
import {onPressStartExplore} from './startExploreUtils';
import {getDataFromFirebase} from '../../utiils/firebaseServices/firebaseCrud';

const StartExploreScreen = ({navigation}: any) => {
  // useEffect(() => {
  //   const getPlanetDetails = async () => {
  //     const planetDetails = await getDataFromFirebase();
  //   };
  // }, []);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../../assets/images/Background.png')}>
      <View style={styles.container}>
        <Back title="Explore your trip" />
      </View>
      <Image
        source={require('../../../assets/images/main.png')}
        style={styles.mainimg}
      />
      <View>
        <View style={styles.mainbox}>
          <View style={styles.box}>
            <Text style={styles.subheader}>Welcome to Mars Exploration</Text>
            <Text style={styles.main}>
              Unveil the Mysteries of the Red Planet
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => onPressStartExplore(navigation)}>
              <Text style={styles.textbtn}>Start Exploring</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StartExploreScreen;
