
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';
import { styles } from './backStyle';

const Back = ({ title, navigation }: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerbox}>
      <Image
        source={require('../../../assets/images/back.png')}
        style={styles.backimg}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Back;

