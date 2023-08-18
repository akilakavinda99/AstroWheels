import {View, Text, StatusBar, ImageBackground, TouchableHighlight} from 'react-native';
import {AndroidSafeArea} from '../../styles/globalStyles';
import {styles} from '../login/loginStyles';
import LoginScreenSuccessSvg from '../../../assets/svgData/LoginScreenSucess';
import theme from '../../theme/theme';
import { screenNames } from '../../constants/navigationConstants/screenNames';
import { stackNames } from '../../constants/navigationConstants/stackNames';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreenSuccess = ({navigation}:any) => {
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

          {/* <View
            style={[
              styles.showProfileBtn,
            ]}>
            <Text
              style={[
                styles.showProfileBtnText
              ]}>
              shanilka fernando
            </Text>
          </View> */}
          <View style={styles.heroButtonSection}>
              <LinearGradient
                colors={[
                  'rgba(0, 0, 0, 0.00)',
                  'rgba(0, 0, 0, 0.10)',
                  '#40235E',
                ]} // Replace with your desired gradient colors
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={{
                  borderRadius: 15,
                  overflow: 'hidden', // Ensure gradient is clipped within button boundaries
                }}>
                <TouchableHighlight
                  style={styles.buttonSection}
                  activeOpacity={0.9}
                  underlayColor={theme.colors.primary.primary600}
                  onPress={() =>
                    navigation.navigate(stackNames.TABS_STACK, {
                      screen: screenNames.Profile_Screen,
                    })
                  }>
                  <Text style={styles.launchButton}>Show Profile</Text>
                </TouchableHighlight>
              </LinearGradient>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginScreenSuccess;
