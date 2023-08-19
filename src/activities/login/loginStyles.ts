import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //Main Login Screen Styles
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  heroSection: {
    flex: 0.5,
    justifyContent: 'flex-end',
    // alignItems: 'flex-start',
    padding: 26,
    width: '100%',
  },
  text: {
    flex: 0.4,
    justifyContent: 'flex-start',
  },
  mainText: {
    color: theme.colors.gray.gray100,
    fontSize: 40,
    textAlign: 'left',
    fontFamily: theme.fonts.bold,
  },
  spanText: {
    color: theme.colors.primary.primary100,
    fontFamily: theme.fonts.bold,
  },

  subText: {
    // paddingTop: 10,
    lineHeight: 34,
    color: theme.colors.gray.gray500,
    // paddingBottom: 50,
    fontSize: scale(16),
    fontFamily: theme.fonts.light,
  },
  heroButtonSection: {
    flex: 0.3,
    justifyContent: 'center',
    // paddingBottom: scale(50),
  },

  buttonSection: {
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: ' #fff',
    backgroundColor: '#40235E',
    borderWidth: 2,
    borderRadius: 15,
    // borderColor: theme.colors.primary.primary200,
  },
  launchButton: {
    backgroundColor: 'transparent',
    color: theme.colors.white,
    fontWeight: '500',
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
  signupSection: {
    display: 'flex',
    flex: 0.2,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // paddingBottom:20,
  },
  signupText: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.gray.gray300,
    fontFamily: theme.fonts.medium,
  },

  //Main Login Screen Scanning Styles

  idTitleSection: {
    flex: 0.1,
    justifyContent: 'flex-start',
  },
  idTitle: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray.gray100,
    fontSize: 20,
  },
  idSection: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanningTextSection: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanningText: {
    fontSize: 22,
    
    fontWeight: '300',
    fontFamily: theme.fonts.light,
  },

  //Main Login Screen Success Styles
  successSection: {
    flex: 0.4,
    justifyContent: 'flex-start',
    padding: scale(26),
  },
  successTitleSection: {
    display: 'flex',
    flex: 0.3,
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  successTitle: {
    fontSize: scale(24),
    width: '80%',
    color: theme.colors.secondary.secondary02,
    fontWeight: '500',
    fontFamily: theme.fonts.medium,
  },
  successParaSection: {
    flex: 0.4,
    justifyContent: 'center',
  },
  successPara: {
    fontSize: scale(18),
    fontFamily: theme.fonts.light,
    color: theme.colors.white,
  },
  showProfileBtn: {
    flex: 0.3,
  },
  showProfileBtnText: {
    color: theme.colors.white,
  },
});
