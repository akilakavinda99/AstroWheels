import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme/theme';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgimage: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  innerContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  dateDetailsDiv: {
    flex: 1,
  },

  mainText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.bold,
  },

  subText: {
    color: theme.colors.primary.primary200,
    fontSize: theme.fontSizes.medium,
  },

  mainDetailsDiv: {
    position: 'absolute',
    left: 20,
    top: '40%',
    alignSelf: 'center',
    width: (windowWidth / 5) * 3,
  },

  subTitle: {
    color: theme.colors.primary.primary200,
    fontSize: theme.fontSizes.medium,
  },

  boldText: {
    fontFamily: theme.fonts.bold,
  },
  mainTitle: {
    fontSize: theme.fontSizes.xlarge,
    fontFamily: theme.fonts.bold,
    paddingVertical: 8,
    color: theme.colors.white,
  },
  belowText: {
    color: theme.colors.gray.gray400,
    opacity: 0.3,
    fontFamily: theme.fonts.regular,
  },

  planetDiv: {
    position: 'absolute',
    height: windowHeight,
    width: windowWidth,
  },
  planet7: {
    position: 'absolute',
    right: '54%',
    top: '21%',
  },
  planet8: {position: 'absolute', right: '37%', top: '27%'},
  planet6: {position: 'absolute', right: '20%', top: '33%'},
  planet5: {position: 'absolute', right: '2%', top: '42%'},
  planet4: {position: 'absolute', right: '1%', top: '55%'},
  planet3: {
    position: 'absolute',
    right: '5%',
    top: '57%',
    width: 130,
    height: 130,
  },
  planet2: {position: 'absolute', right: '38%', top: '71%'},
  planet1: {
    position: 'relative',
    right: '18%',
    top: '2%',
    width: 220,
    height: 220,
  },
});
