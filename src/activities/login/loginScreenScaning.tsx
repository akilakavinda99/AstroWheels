// import {
//   View,
//   Text,
//   SafeAreaView,
//   StatusBar,
//   ImageBackground,
//   Image,
//   TouchableHighlight,
// } from 'react-native';
// import {styles} from '../login/loginStyles';
// import theme from '../../theme/theme';
// import {AndroidSafeArea} from '../../styles/globalStyles';
// import {useState, useEffect} from 'react';
// import LottieView from 'lottie-react-native';
// import {screenNames} from '../../constants/navigationConstants/screenNames';
// import {documentNames} from '../../constants/firebaseConstants/documentNames';
// import {getUserData} from './loginUtils';
// import {useAppContext} from '../../context/AppContext';

// const LoginScreenScaning = ({navigation, route}: any) => {
//   const [first, setfirst] = useState(1);
//   const [verifiedColor, setVerifiedColor] = useState(theme.colors.gray.gray100);

//   const [userId, setuserId] = useState(false);
//   const {user, setUser} = useAppContext();
//   useEffect(() => {
//     console.log('Detecting Galactic Id');
//     setTimeout(() => {
//       setVerifiedColor(theme.colors.secondary.secondary02);
//     }, 4630);
//     setTimeout(() => {
//       navigation.navigate(screenNames.Login_Success);
//     }, 5000);
//   }, []);

//   const fetchUserData = async userId => {
//     const user = await getUserData(userId);
//     console.log('user in fetch: ', user);
//     setUser(user);
//   };

//   useEffect(() => {
//     if (route.params.userId != null) {
//       fetchUserData(route.params.userId);
//     } else if (userId) {
//       fetchUserData(userId);
//     }
//   }, [route.params, userId]);

//   return (
//     <View style={AndroidSafeArea}>
//       <StatusBar translucent backgroundColor="transparent" />
//       <ImageBackground
//         source={require('../../../assets/LoginScreenScaning.png')}
//         resizeMode="cover"
//         style={styles.image}>
//         <View style={[styles.heroSection]}>
//           <View style={styles.idTitleSection}>
//             <Text style={styles.idTitle}>Verification</Text>
//           </View>

//           <View style={styles.idSection}>
//             <LottieView
//               source={require('../../../assets/animations/GalacticIdDetected.json')}
//               autoPlay
//               style={{
//                 width: 250,
//                 height: 150,
//               }}
//               speed={1.5}
//             />
//           </View>

//           {/* <View style={styles.idSection}>

//             <Image source={require('../../../assets/GalacticId.png')} />
//           </View> */}

//           <View style={styles.scanningTextSection}>
//             <TouchableHighlight
//               activeOpacity={0.9}
//               underlayColor={theme.colors.primary.primary600}>
//               <Text
//                 style={[
//                   styles.scanningText,
//                   {
//                     color: verifiedColor,
//                   },
//                 ]}>
//                 {' '}
//                 Detecting Galactic Id
//               </Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };
// export default LoginScreenScaning;

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native';
import {styles} from '../login/loginStyles';
import theme from '../../theme/theme';
import {AndroidSafeArea} from '../../styles/globalStyles';
import React, {useState, useEffect} from 'react';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {documentNames} from '../../constants/firebaseConstants/documentNames';
import {getUserData} from './loginUtils';
import {useAppContext} from '../../context/AppContext';
import LottieView from 'lottie-react-native';

const LoginScreenScaning = ({navigation, route}: any) => {
  const [verifiedColor, setVerifiedColor] = useState(theme.colors.gray.gray100);
  const [first, setfirst] = useState(1);
  const [userId, setuserId] = useState(false);
  const {user, setUser} = useAppContext();
  useEffect(() => {
    console.log('Detecting Galactic Id');
    setTimeout(() => {
      navigation.navigate(screenNames.Login_Success);
    }, 5000);
  }, []);
//me userid eke wada nha kiyela enne .tap to launch press kerama error eke enne 
  const fetchUserData = async (userId) => {
    const user = await getUserData(userId);
    console.log('user in fetch: ', user);
    setUser(user);
  };
  useEffect(() => {
    if (route.params.userId != null) {
      fetchUserData(route.params.userId);
    } else if (userId) {
      fetchUserData(userId);
    }
  }, [route.params, userId]);

  return (
    <View style={AndroidSafeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../../../assets/LoginScreenScaning.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={[styles.heroSection]}>
          <View style={styles.idTitleSection}>
            <Text style={styles.idTitle}>Verification</Text>
          </View>

          <View style={styles.idSection}>
            <LottieView
              source={require('../../../assets/animations/GalacticIdDetected.json')}
              autoPlay
              style={{
                width: 250,
                height: 150,
              }}
              speed={1.5}
            />
          </View>

          <View style={styles.scanningTextSection}>
            <TouchableHighlight
              activeOpacity={0.9}
              underlayColor={theme.colors.primary.primary600}>
              <Text
                style={[
                  styles.scanningText,
                  {
                    color: verifiedColor,
                  },
                ]}>
                {' '}
                Detecting Galactic Id
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginScreenScaning;
