import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';
import {scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  spaceShipRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  spaceShipImage: {
    width: scale(220),
    position: 'absolute',
    height: scale(260),
    transform: [{rotate: '-25deg'}],
  },
  speedCircle: {
    marginTop: scale(50),
  },
  speedText: {
    width: scale(140),
    textAlign: 'left',
    marginTop: scale(12),
    color: theme.colors.primary.primary150,
    marginBottom: scale(20),
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.small,
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  headingText: {
    color: theme.colors.gray.gray100,
    fontSize: 20,
    fontWeight: '500',
  },
  arIcon: {
    marginLeft: 10,
  },
  detailsContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  detailsFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailsCardMainView: {
    borderColor: theme.colors.gray.gray100,
    borderWidth: 1,
    width: 172,
    height: 118,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    paddingTop: 8,
  },
  detailsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailsHeaderText: {
    color: theme.colors.primary.primary50,
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.medium,
  },
  detailsDescription: {
    color: theme.colors.gray.gray300,
    fontSize: theme.fontSizes.small,
  },
});
