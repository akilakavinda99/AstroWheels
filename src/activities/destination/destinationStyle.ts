import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import theme from '../../theme/theme';
export const style = StyleSheet.create({

  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#E6E5E6',
    fontFamily: theme.fonts.bold,
  },
  para: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A792BC',
    fontFamily: theme.fonts.bold,
  },
  chartimg: {
    width: '100%',
    height: '55%',
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
  },
  shiptitle: {
    fontSize: 20,
    color: '#E6E5E6',
    fontWeight: '500',
    marginTop: '6%',
    marginBottom: '6%',
    fontFamily: theme.fonts.bold,
  },
  button: {
    backgroundColor: '#40235E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    borderRadius: 8,
  },
  textbtn: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
});

export const styletwo = StyleSheet.create({
  container:{
  marginHorizontal: '5%'
  },
  maintitle: {
    color: '#E6E5E6',
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    fontWeight: '500',
    margin: moderateScale(12),
  },
  backgroundImage: {flex: 1, width: '100%', height: 960},
  topsection: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: moderateScale(10),
  },
  backgroundimg: {
    padding: moderateScale(15),
    borderRadius: 8,
    height: 140,
    resizeMode: 'contain',
  },

  topsectiontwo: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: moderateScale(10),
  },
  bottomsection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 10,
  },
  subsection: {
    flex: 0.5,
    overflow: 'hidden',
    borderRadius: 8,
    paddingBottom: '10%',
    height:140,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: '#E6E5E6',
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: theme.fonts.bold,
  },
  para: {
    fontSize: 13,
    color: '#A792BC',
    fontFamily: theme.fonts.medium,
  
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '5%',
    backgroundColor: '#0D0712',
    height: 50,
    borderRadius: 10,
  },

  screenButton: {
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    backgroundColor: '#0D0712',
    borderRadius: 8,
    marginHorizontal: '4%',
    height: 40,
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  activeButton: {
    backgroundColor: '#40235E',
  },

  buttonText: {
    color: '#9A989A',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
