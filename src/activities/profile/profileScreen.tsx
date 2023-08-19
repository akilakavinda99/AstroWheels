import {View, Text, StatusBar, ImageBackground, Image} from 'react-native';
import theme from '../../theme/theme';
import {AndroidSafeArea} from '../../styles/globalStyles';
import {styles} from '../profile/ProfileScreenStyles';

const ProfileScreen = () => {
  return (
    <View style={AndroidSafeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/UserProfileScreen.png')}
          resizeMode="cover"
          style={styles.image}>
          {/* <View style={[{backgroundColor: theme.colors.primary.primary300}]}>
            <Text style={[{backgroundColor: theme.colors.gray.gray200}]}>
              ProfileScreen
            </Text>
          </View> */}

          {/* <Image source={require('../../../assets/User.png')} /> */}
          <View style={styles.userDetailsSection}>
            <View style={styles.userDetails}>
              <View style={styles.userDetails}>
                <View
                  style={{backgroundColor: theme.colors.primary.primary200}}>
                  <Text>shanila</Text>
                </View>
                <View>shanilka fer</View>
              </View>
              <View>
                <View>shanilka maiya</View>
                <View>shanilka fernando</View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default ProfileScreen;
