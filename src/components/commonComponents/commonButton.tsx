import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import theme from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {stackNames} from '../../constants/navigationConstants/stackNames';
import {styles} from '../../activities/login/loginStyles';

const CommonButton = ({buttonText,buttonOnpressFunction}:{buttonText:String,buttonOnpressFunction:any}) => {
  return (
      <View style={styles.heroButtonSection}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.10)', '#40235E']} // Replace with your desired gradient colors
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
            onPress={
                buttonOnpressFunction
            //   navigation.navigate(stackNames.AUTH_STACK, {
            //     screen: screenNames.Login_ID_Screen,
            //   }
            //   )
            }>
            <Text style={styles.launchButton}>{buttonText}</Text>
          </TouchableHighlight>
        </LinearGradient>
      </View>

  );
};
export default CommonButton;
