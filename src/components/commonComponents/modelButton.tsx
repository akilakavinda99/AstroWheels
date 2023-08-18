import {View, Text, TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import theme from '../../theme/theme';

const ModelButton = ({onPress, text, value}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(value)}
      style={{
        backgroundColor: theme.colors.primary.primary600,
        borderRadius: 20,
        width: scale(80),
        height: scale(25),
        marginTop: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: theme.colors.primary.primary200,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ModelButton;
