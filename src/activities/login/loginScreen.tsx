import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme/theme';
import {styles} from '../login/loginStyles';
import {AndroidSafeArea} from '../../styles/globalStyles';
import {useState} from 'react';
import SignUpModelComponent from '../../components/commonComponents/modelComponent';
import {launchFunction} from './loginUtils';

const LoginScreen = ({onPress, navigation}: any) => {
  const [testingModelVisible, setTestingModelVisible] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <View style={AndroidSafeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/LoginScreen.png')}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.heroSection}>
            <View style={styles.text}>
              <Text style={styles.mainText}>
                Welcome to Astro
                <Text style={styles.spanText}>Wheels</Text>
              </Text>
              <View>
                <Text style={styles.subText}>Your Journey Begins Here!</Text>
              </View>
            </View>

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
                  onPress={() => launchFunction(userId, navigation)}>
                  <Text style={styles.launchButton}>Tap to Launch</Text>
                </TouchableHighlight>
              </LinearGradient>
            </View>

            <View style={styles.signupSection}>
              <Text style={styles.signupText}>You don't have account?</Text>

              <TouchableOpacity
                onPress={() => {
                  console.log('Signup Pressed');
                  setTestingModelVisible(true);
                }}>
                <Text
                  style={{
                    color: theme.colors.primary.primary200,
                    fontWeight: '500',
                  }}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* <LoginScreenSvg/> */}
      </View>
      <SignUpModelComponent
        visibility={testingModelVisible}
        buttonFunction={setUserId}
        onBackdropPress={() => setTestingModelVisible(false)}
      />
    </View>
  );
};

export default LoginScreen;
