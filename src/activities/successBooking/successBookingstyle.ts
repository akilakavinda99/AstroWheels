import theme from '../../theme/theme';
import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
     paddingHorizontal:'4%'
    },
 
rocket:{
    width:'20%',
    height: '20%',
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '-9%',
    marginTop: '-23%'

},
rockettext:{
    color:'#0BE9A6',
    fontSize: 24,
    fontFamily: theme.fonts.medium,
    width:'80%',
    textAlign:'center',
    marginLeft: 'auto',
    marginRight:'auto',
    marginBottom: '7%'
},
button:{
    backgroundColor: '#40235E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '4%',
    borderRadius: 8,
    marginHorizontal: '5%'
  },
  textbtn:{
    color:"#FFFFFF",
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  }
})