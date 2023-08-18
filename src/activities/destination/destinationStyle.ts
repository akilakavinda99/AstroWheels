import {
    StyleSheet,
  
  } from 'react-native';
  import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
 export const  style = StyleSheet.create({
    container:{
      marginLeft: 10,
      marginRight: 10,
    },
  title:{
    fontSize: 20,
    fontWeight: '500',
    color: '#E6E5E6'
  
  },
  para:{
    fontSize: 12,
    fontWeight: '400',
    color: '#A792BC'
  },
  chartimg:{
    width: '90%',
    height:'60%',
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
  }
  })
  
  
  
export const styletwo =  StyleSheet.create({
    maintitle: {
      color: '#E6E5E6',
      fontSize: 20,
      fontWeight: '500',
      margin: moderateScale(12),
    },
    backgroundImage: {flex: 1, width: '100%', height: 960},
    topsection: {
     
      borderRadius: 8,
      overflow: 'hidden',
      margin: moderateScale(10),
  
    },
    backgroundimg: {
      padding: moderateScale(15),
      borderRadius: 8, 
      height: 120,
    },
    
    topsectiontwo: {
      borderRadius: 8,
      overflow: 'hidden',
      margin: moderateScale(10),
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
    },
    para: {
      fontSize: 13,
      color: '#A792BC',
    },
  });
  