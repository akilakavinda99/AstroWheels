import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from './primaryButton';
import { SCREEN_WIDTH } from '../../styles/globalStyles';
import theme from '../../theme/theme';
import SvgCurrency from '../../activities/bookSeats/components/svgCurrency';

interface ConfirmBookingProps {
    title: string;
    price: number;
    description: string;
    buttonText: string;
    buttonOnPress?: () => void;
}

export const ConfirmBooking = ({ title, price, description, buttonText, buttonOnPress }: ConfirmBookingProps) => {
    return (
        <View
            style={styles.mainView}>
            <View
                style={styles.headView}>
                <Text
                    style={styles.title}>
                    {title}
                </Text>
                <View style={styles.priceView}>
                    <Text
                        style={styles.price}>
                        {price}
                    </Text>
                    <SvgCurrency />
                </View>
            </View>
            <Text
                style={styles.description}>
                {description}
            </Text>
            <PrimaryButton text={buttonText} onPress={buttonOnPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        position: 'absolute',
        bottom: 0,
        width: SCREEN_WIDTH,
        height: '25%',
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
        fontWeight: 500,
        lineHeight: 30,
        fontFamily: theme.fonts.bold,
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    price: {
        color: '#FFE566',
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 30,
        fontFamily: theme.fonts.bold,
    },
    description: {
        color: '#B3B2B3',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16,
        paddingVertical: 10,
        fontFamily: theme.fonts.regular,
    },
});