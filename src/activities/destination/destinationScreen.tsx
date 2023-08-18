import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { stackNames } from '../../constants/navigationConstants/stackNames';
import { screenNames } from '../../constants/navigationConstants/screenNames';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  ToastAndroid,
  ImageBackground,
  Button
} from 'react-native';

import "./destinationStyle"
import { style, styletwo } from './destinationStyle';

const TestSreen2 = () => {
  return (
    <View >
      <Text style={styletwo.maintitle}>Specifications</Text>

      <View style={styletwo.topsection}>
      <ImageBackground
        style={styletwo.backgroundimg}
        source={require('../../../assets/images/bgone.png')}
      >
        <Text style={styletwo.title}>Valles Marineris</Text>
        <Text style={styletwo.para}>
          Travelers could explore its towering cliffs, winding valleys, and
          potentially discover evidence of Mars' ancient geological and
          hydrological history.
        </Text>
        </ImageBackground>
      </View>

      <View style={styletwo.topsectiontwo}>
      <ImageBackground
        style={styletwo.backgroundimg}
        source={require('../../../assets/images/bgone.png')}
      >
        <Text style={styletwo.title}>Curiosity Rover Landing Sit</Text>
        <Text style={styletwo.para}>
          Have you ever dreamed of walking in the footsteps of pioneers? You can
          make that dream a reality by visiting the iconic landing site of the
          Curiosity Rover on Mars
        </Text>
          </ImageBackground>
      </View>

      <View style={styletwo.bottomsection}>

        <View style={styletwo.subsection}>
        <ImageBackground
        style={styletwo.backgroundimg}
        source={require('../../../assets/images/bgone.png')}
      >
          <Text style={styletwo.title}>Lunar retregeg</Text>
          <Text style={styletwo.para}>
            Nisl posuere suspendisse enim vulputate nunc vitae
          </Text>
          </ImageBackground>
        </View>

        <View style={styletwo.subsection}>
        <ImageBackground
        style={styletwo.backgroundimg}
        source={require('../../../assets/images/bgone.png')}
      >
          <Text style={styletwo.title}>Lunar retregeg</Text>
          <Text style={styletwo.para}>
            Nisl posuere suspendisse enim vulputate nunc vitae
          </Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

const TestSreen3 = ({navigation}: any) => {
  return (
    <View style={style.container}>

{/* <Pressable style={stylestwo.button} onPress={()=> navigation.navigate(stackNames.BOOKING_STACK,{screen:screenNames.StartExplore_Screen})}>
      <Text >Planet Destination</Text>
    </Pressable> */}

      <Text style={style.title}>Exploring Geological Diversity</Text>
      <Text style={style.para}>Unveil the Rich Geological Tapestry of Valles Marineris</Text>

      <Image
        source={require('../../../assets/images/chart.png')} 
        style={style.chartimg}
      />

      <Text style={style.shiptitle}>Explore Our Space ships</Text>

      <Pressable style={style.button} onPress={()=> navigation.navigate(stackNames.BOOKING_STACK,{screen:screenNames.StartExplore_Screen})}>
      <Text style={style.textbtn}>Book your Vehicle</Text>
    </Pressable>
      {/* <Button title='submit' onPress={()=> navigation.navigate(stackNames.BOOKING_STACK,{screen:screenNames.StartExplore_Screen})}></Button> */}
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function Destination() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Test2" component={TestSreen2} />
    //     <Tab.Screen name="Test4" component={TestSreen3} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <ImageBackground
      style={styletwo.backgroundImage}
      source={require('../../../assets/images/Background.png')}>
    <View>
      <TestSreen2 />
    </View>
      </ImageBackground>
  );
}

