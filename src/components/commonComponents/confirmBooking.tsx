import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PrimaryButton} from './primaryButton';
import {SCREEN_WIDTH} from '../../styles/globalStyles';
import theme from '../../theme/theme';
import SvgCurrency from '../../activities/bookSeats/components/svgCurrency';
import {getCommaSeperated} from '../../utiils/getCommaSeperated';

interface ConfirmBookingProps {
  title: string;
  price: number;
  description: string;
  buttonText: string;
  availableBalance: number | null;
  buttonOnPress?: () => void;
}

export const ConfirmBooking = ({
  title,
  price,
  description,
  buttonText,
  availableBalance,
  buttonOnPress,
}: ConfirmBookingProps) => {
  // add , on price
  let priceString = getCommaSeperated(price);
  let availableBalanceString = getCommaSeperated(availableBalance);

  return (
    <View style={styles.mainView}>
      <View style={styles.headView}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <View style={styles.priceView}>
            <Text style={styles.price}>{priceString}</Text>
            <SvgCurrency />
          </View>
          <Text style={styles.availableBalance}>
            Available: {availableBalanceString}
          </Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
      <PrimaryButton text={buttonText} onPress={buttonOnPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    bottom: 0,
    width: SCREEN_WIDTH,
    height: '28%',
    backgroundColor: '#0D0712',
    paddingHorizontal: 20,
    opacity: 0.8,
    paddingTop: '5%',
  },
  headView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
  },
  title: {
    color: '#B5A2CA',
    fontSize: 20,
    lineHeight: 30,
    fontFamily: theme.fonts.bold,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  availableBalance: {
    color: '#FFE566',
    fontSize: 12,
    opacity: 0.5,
    // lineHeight: 16,
    fontFamily: theme.fonts.regular,
  },
  price: {
    color: '#FFE566',
    fontSize: 24,
    lineHeight: 30,
    fontFamily: theme.fonts.bold,
  },
  description: {
    color: '#B3B2B3',
    fontSize: 12,
    lineHeight: 16,
    paddingVertical: 10,
    fontFamily: theme.fonts.regular,
  },
});
