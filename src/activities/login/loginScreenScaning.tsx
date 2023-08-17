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
  import {SafeAreaFrameContext} from 'react-native-safe-area-context';
  import theme from '../../theme/theme';
  import {AndroidSafeArea} from '../../styles/globalStyles';
  import {useState, useEffect} from 'react';
  
  const LoginScreenScaning = ({navigation}: any) => {
    const [first, setfirst] = useState(1);
    useEffect(() => {
      console.log('Detecting Galactic Id');
      setTimeout(() => {
        navigation.navigate('LoginSuccess');
      }, 5000);
    }, []);
  
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
  