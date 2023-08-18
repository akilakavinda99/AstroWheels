import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';

export const styles = StyleSheet.create({
    headerbox: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginTop: 50,
      marginBottom: 20,
    },
  
    title: {
      color: '#E6E5E6',
      fontSize: 20,
      fontFamily: theme.fonts.bold,
      marginLeft: 4,
      flex: 0.9,
    },
    backimg: {
      height: 30,
      flex: 0.1,
      padding: 'auto',
    },
  });