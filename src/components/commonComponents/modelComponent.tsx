import {View, Text, Button, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../theme/theme';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import ModelButton from './modelButton';
const SignUpModelComponent = ({
  visibility,
  onBackdropPress,
  buttonFunction,
}) => {
  return (
    <Modal isVisible={visibility}>
      <View
        style={{
          backgroundColor: theme.colors.primary.primary200,
          borderRadius: 20,
          height: scale(180),
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <ModelButton
            text={'User 1'}
            onPress={val => {
              buttonFunction(val);
              onBackdropPress();
            }}
            value={1}
          />
          <ModelButton
            text={'User 2'}
            onPress={val => {
              buttonFunction(val);
              onBackdropPress();
            }}
            value={2}
          />
          <ModelButton
            text={'User 2'}
            onPress={val => {
              buttonFunction(val);
              onBackdropPress();
            }}
            value={3}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SignUpModelComponent;