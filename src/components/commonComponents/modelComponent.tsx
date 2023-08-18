import {View, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../theme/theme';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
const ModelComponent = ({visibility, onBackdropPress}) => {
  return (
    <Modal
      isVisible={visibility}
      onBackdropPress={() => {
        onBackdropPress();
      }}>
      <View
        style={{
          backgroundColor: theme.colors.primary.primary200,
          borderRadius: 20,
          height: scale(150),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: theme.fonts.medium,
            fontSize: scale(15),
            marginTop: scale(10),
          }}>
          Welcome to testing of AstroWheels
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: theme.fonts.regular,
            marginTop: scale(10),
          }}>
          Due to the assumptions we have done the user account creation
          technolgies are not currently available
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: theme.fonts.regular,
            marginTop: scale(10),
          }}>
          Select a dummy account to continue
        </Text>
        <View>
          <Button title="sdsd" />
        </View>
      </View>
    </Modal>
  );
};

export default ModelComponent;
