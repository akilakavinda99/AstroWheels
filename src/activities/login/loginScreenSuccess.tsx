import {View, Text, StatusBar, ImageBackground} from 'react-native';
import {AndroidSafeArea} from '../../styles/globalStyles';
import {styles} from '../login/loginStyles';
import LoginScreenSuccessSvg from '../../../assets/svgData/LoginScreenSucess';
import theme from '../../theme/theme';

const LoginScreenSuccess = () => {
  return (
    <View style={AndroidSafeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../../../assets/LoginScreenScaning.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.successSection}>
          <View style={styles.successTitleSection}>
            <LoginScreenSuccessSvg />
            <Text style={styles.successTitle}>Successfully Enrolled!</Text>
          </View>

          <View style={styles.successParaSection}>
            <Text style={styles.successPara}>
              Verify your physical eligibility for embarking on an exploratory
              journey through the galaxy.
            </Text>
          </View>

          <View
            style={[
              styles.showProfileBtn,
            ]}>
            <Text
              style={[
                styles.showProfileBtnText
              ]}>
              shanilka fernando
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginScreenSuccess;
