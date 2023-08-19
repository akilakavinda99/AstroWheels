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
    flex: 0.55,
    // justifyContent: 'flex-end',
  },

  userDetails: {
    flex: 1,
    margin: scale(10),
  },
  userDetailsSubSection: {
    flex: 0.4,
    display: 'flex',
    flexDirection: 'row',
    margin: 2,
  },
  userTextDetailsFlex: {
    width: '50%',
    height: '100%',
    margin: 2,
  },
  userTextDetails: {
    width: '50%',
    height: '100%',
    margin: 2,
    borderRadius: 8,
    padding: 8,
    borderWidth: 0.5,
    borderColor: theme.colors.primary.primary300,
  },
  userInnerTextDetails: {
    flex: 0.5,
    borderRadius: 8,
    padding: 8,
    borderWidth: 0.5,
    marginBottom: 1,
    borderColor: theme.colors.primary.primary300,
  },

  textDetails: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary.primary50,
    fontWeight: '500',
    fontSize: scale(16),
  },
  progressText: {
    fontFamily: theme.fonts.light,
    fontSize: scale(12),
    color: theme.colors.primary.primary50,
  },
});
