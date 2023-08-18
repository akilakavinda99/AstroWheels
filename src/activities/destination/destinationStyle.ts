import {
    StyleSheet,
  
  } from 'react-native';
  import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
  import theme from '../../theme/theme';
 export const  style = StyleSheet.create({
  title:{
    fontSize: 20,
    fontWeight: '500',
    color: '#E6E5E6',
    fontFamily: theme.fonts.bold,
  
  },
  para:{
    fontSize: 12,
    fontWeight: '400',
    color: '#A792BC',
    fontFamily: theme.fonts.bold,
  },
  chartimg:{
    width: '100%',
    height:'55%',
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%'
  },
  shiptitle:{
    fontSize: 20,
    color: '#E6E5E6',
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: theme.fonts.bold,
  },
  button:{
    backgroundColor: '#40235E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  textbtn:{
    color:"#FFFFFF",
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  }
  
  })
  
  
  
export const styletwo =  StyleSheet.create({
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
      height: 120,
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
      padding: moderateScale(10),
      columnGap: 10,
    },
    subsection: {
      flex: 0.5,
      height: 100,
      overflow: 'hidden',
      borderRadius: 8,
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
      marginVertical: 20,
      backgroundColor: '#0D0712',
       height: 50,
       borderRadius: 10

    },
  
    screenButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#0D0712',
      borderRadius: 8,
      marginHorizontal: 10,
      height: 40,
      marginTop: 'auto',
      marginBottom: 'auto'
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
  