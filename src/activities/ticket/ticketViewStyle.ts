import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import theme from '../../theme/theme';
export const styles = StyleSheet.create({

container:{
    marginHorizontal: '4%'
},
box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  card:{
    backgroundColor: '#20132E',
    marginTop: '5%',
    marginBottom: '1%',
    padding: '3%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#372C43",
  },
  bottombox:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 15
  },
//   colone:{
//     flex: 0.4
//   },
//   coltwo:{
//     flex: 0.3
//   },
//   colthree:{
//     flex: 0.3
//   },
  title:{
    color: '#C4B1D8',
    textAlign: 'center',
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.small
  },
  contentone:{
    color:'#E6E5E6',
    textAlign: 'center'
  },
  price:{
    color:'#FFE566',
    textAlign: 'center'
  },
  pricebox:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft:'auto',
    marginRight: 'auto'
  },
  gem:{
    width:'18%',
    height: '78%',
    resizeMode: 'contain',
    marginTop: 'auto',
    marginBottom: 'auto',
    
  },
  gsd:{
    color:'#E6E5E6',
    fontFamily: theme.fonts.medium,
  },
  book:{
    color: '#C4B1D8',
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    textAlign: 'center'
  },
  planett: {
    color: '#E6E5E6',
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.exlarge,
    textAlign: 'right',
    marginTop: '9%'
  },
  line:{
    height: 2,
    backgroundColor: 'white',
    width: '16%',
    position: 'absolute',
    top: '50%',
    left: '45%'
  }
})