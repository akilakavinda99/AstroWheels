import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';
import {scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
  },
//   userImage: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingTop: scale(20),
//   },
userDetailsSection: {
    flex: 0.5 ,
    // justifyContent: 'flex-end',
    backgroundColor: theme.colors.gray.gray100,
  },

  userDetails:{
    flex:1,
    backgroundColor:theme.colors.secondary.secondary01,
    margin:scale(10)
  },
  
});
