import {View, Text, Button, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import DropdownComponent from '../../components/commonComponents/dropDown';
import CommonButton from '../../components/commonComponents/commonButton';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme/theme';
import {stackNames} from '../../constants/navigationConstants/stackNames';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {useAppContext} from '../../context/AppContext';
import {useNavigation} from '@react-navigation/native';

const DateSelectionModel = ({visibility, value, setValue, data}) => {
  const [dropDownval, setDropDownVal] = useState(null);
  const {setDate} = useAppContext();
  const navigation = useNavigation();
  const exploreFunction = () => {
    if (dropDownval != null) {
      console.log('Explore function called');
      setDate(dropDownval);
      navigation.navigate(stackNames.BOOKING_STACK, {
        screen: screenNames.Spaceship_Screen,
      });
    }
  };
  return (
    <Modal isVisible={visibility}>
      <View style={{}}>
        <Text
          style={{
            color: 'white',
          }}>
          Select an available date
        </Text>
        <DropdownComponent
          value={value}
          setValue={setValue}
          setDropDownVal={setDropDownVal}
          data={data}
        />
        {/* <CommonButton /> */}
        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
          }}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.10)', '#40235E']} // Replace with your desired gradient colors
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={{
              borderRadius: 15,
              overflow: 'hidden',
              width: 150, // Ensure gradient is clipped within button boundaries
            }}>
            <TouchableHighlight
              style={{
                paddingTop: 16,
                paddingBottom: 16,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: ' #fff',
                backgroundColor: '#40235E',
                borderWidth: 2,
                borderRadius: 15,
                width: 150,
              }}
              activeOpacity={0.9}
              underlayColor={theme.colors.primary.primary600}
              onPress={exploreFunction}>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  color: theme.colors.white,
                  fontWeight: '500',
                  fontSize: 20,
                  fontFamily: theme.fonts.medium,
                }}>
                Book
              </Text>
            </TouchableHighlight>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  );
};

export default DateSelectionModel;
