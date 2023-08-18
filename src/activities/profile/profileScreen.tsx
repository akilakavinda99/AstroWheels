import {View, Text, StatusBar, ImageBackground} from 'react-native';
import theme from '../../theme/theme';
import {AndroidSafeArea} from '../../styles/globalStyles';
import {styles} from '../profile/ProfileScreenStyles';

const ProfileScreen = () => {
  return (
    <View style={AndroidSafeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/LoginScreen.png')}
          resizeMode="cover"
          style={styles.image}>
          {/* <View style={[{backgroundColor: theme.colors.primary.primary300}]}>
            <Text style={[{backgroundColor: theme.colors.gray.gray200}]}>
              ProfileScreen
            </Text>
          </View> */}
        </ImageBackground>
      </View>
    </View>
  );
};

export default ProfileScreen;
