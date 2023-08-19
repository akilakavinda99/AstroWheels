import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native';
import {styles} from '../login/loginStyles';
import theme from '../../theme/theme';
import {AndroidSafeArea} from '../../styles/globalStyles';
import {useState, useEffect} from 'react';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {documentNames} from '../../constants/firebaseConstants/documentNames';
import {getUserData} from './loginUtils';
import {useAppContext} from '../../context/AppContext';

const LoginScreenScaning = ({navigation, route}: any) => {
  const [first, setfirst] = useState(1);
  const [userId, setuserId] = useState(false);
  const {user, setUser} = useAppContext();
  useEffect(() => {
    console.log('Detecting Galactic Id');
    setTimeout(() => {
      navigation.navigate(screenNames.Login_Success);
    }, 5000);
  }, []);

  const fetchUserData = async userId => {
    const user = await getUserData(userId);
    console.log('user in fetch: ', user);
    setUser(user);
  };

  useEffect(() => {
    if (route.params.userId != null) {
      fetchUserData(route.params.userId);
    } else if (userId) {
      fetchUserData(userId);
    }
  }, [route.params, userId]);

  return (
    <View style={AndroidSafeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../../../assets/LoginScreenScaning.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={[styles.heroSection]}>
          <View style={styles.idTitleSection}>
            <Text style={styles.idTitle}>Verification</Text>
          </View>

          <View style={styles.idSection}>
            <Image source={require('../../../assets/GalacticId.png')} />
          </View>

          <View style={styles.scanningTextSection}>
            <TouchableHighlight
              activeOpacity={0.9}
              underlayColor={theme.colors.primary.primary600}>
              <Text style={styles.scanningText}>Detecting Galactic Id</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginScreenScaning;
