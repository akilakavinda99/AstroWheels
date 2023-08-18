import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import theme from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  mainbox: {},
  box: {
    marginHorizontal: 20,
    alignSelf: 'flex-end',
    elevation: 3,
  },

  backgroundImage: {flex: 1, width: '100%', height: '100%'},
  mainimg: {
    padding: moderateScale(15),
    borderRadius: 8,
    height: '40%',
    width: '100%',
    marginTop: 50,
    resizeMode: 'contain',
  },
  subheader: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    paddingVertical: 8,
    marginTop: 80,
    bottom: 5,
    color: '#9A989A',
  },
  main: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    paddingVertical: 8,
    bottom: 5,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#40235E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  textbtn: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
});
