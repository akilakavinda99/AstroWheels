import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import theme from '../../theme/theme';
export const style = StyleSheet.create({
  container: {
    flex: 1,
   marginHorizontal:'4%'
  },

  backgroundImage: {flex: 1, width: '100%', height: '100%',    resizeMode: 'contain',},
  imageone:{
     width:'14%',
     height: '14%',
     resizeMode: 'contain',
     marginLeft: 'auto',
     marginRight: 'auto',
     zIndex:1,
     marginTop:'-23%'
  },
  card: {
    backgroundColor: '#20132E',
    height: '50%',
    borderRadius: 15,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: '5%',
    marginTop: '5%',
    marginBottom: '1%'
  },
  sectionone: {
    flex: 0.5,
    paddingLeft: '2%',
  },
  sectiontwo: {
    flex: 0.5,
    paddingRight: '2%',
    textAlign: 'right',
  },
  vehicle: {
    color: '#7A6392',
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.medium,
  },
  planet: {
    color: '#E6E5E6',
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.exlarge,
  },
  location: {
    color: '#C4B1D8',
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.medium,
    marginBottom: '7%',
    lineHeight: 16,
  },
  time: {
    color: '#E6E5E6',
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.large,
  },
  date: {
    color: '#C4B1D8',
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.medium,
    lineHeight: 18,
  },
  vehiclet: {
    color: '#7A6392',
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.medium,
    textAlign: 'right',
  },
  planett: {
    color: '#E6E5E6',
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.exlarge,
    textAlign: 'right',
  },
  locationt: {
    color: '#C4B1D8',
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.medium,
    marginBottom: '7%',
    lineHeight: 16,
    textAlign: 'right',
  },
  timet: {
    color: '#E6E5E6',
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.large,
    textAlign: 'right',
  },
  datet: {
    color: '#C4B1D8',
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.medium,
    lineHeight: 18,
    textAlign: 'right',
  },
  codesection: {
    marginTop: '8%',
    backgroundColor: '#20132E',
    height: '65%',
    width: '100%',
    borderRadius: 15,
    paddingTop:  '7%'
  },
  codeimg: {
    height: '55%',
    width: '100%',
    resizeMode: 'contain',
  },
  middle: {
    marginTop:'-15%',
    backgroundColor: '#190F24',
    borderRadius: 10,
    zindex:3
  },
  middletext: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: '5%',
    paddingBottom: '6%',
    paddingTop: '7%',
  },
  press:{
    color:'#C4B1D8',
    paddingBottom: '3%',
    marginLeft:'7%'
  },
  line:{
    height: 2,
    backgroundColor: 'white',
    width: '17%',
    position: 'absolute',
    top: '37%',
    left: '43%'
  }
});
