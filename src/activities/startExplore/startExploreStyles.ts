import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import theme from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  mainbox: {},
  box: {
    marginHorizontal: '5%',
  },

  backgroundImage: {flex: 1, width: '100%', height: '100%'},
  mainimg: {
    padding: moderateScale(15),
    borderRadius: 8,
    height: '40%',
    width: '100%',
    marginTop: '10%',
    resizeMode: 'contain',
  },
  subheader: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    paddingVertical:'3%',
    marginTop: '25%',
    bottom: '2%',
    color: '#9A989A',
  },
  main: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    paddingVertical:'3%',
    bottom: '2%',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#40235E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:'4%',
    borderRadius: 8,
  },
  textbtn: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
});
