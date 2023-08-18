import {View, Text, StatusBar} from 'react-native';
import theme from '../../theme/theme';
import {AndroidSafeArea} from '../../styles/globalStyles';

const ProfileScreen = () => {
  return (
    <View style={AndroidSafeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      
      <View style={[{backgroundColor:theme.colors.primary.primary300}]}>
        <Text style={[{backgroundColor: theme.colors.gray.gray200}]}>
          ProfileScreen
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
