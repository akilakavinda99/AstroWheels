import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import SvgCompartment from './svgCompartment';
import SvgCompartmentBooked from './svgCompartmentBooked';
import SvgCompartmentSelected from './svgCompartmentSelected';

export const PackageSection = (props: any) => {
    const handleSeatSelection = (seat) => {
        if (props.selectedSeat === seat) {
            seat = null;
        }

        props.selectSeat(seat);
    }
    return (
        <View
            style={{
                position: 'absolute',
                top: props.top,
                left: props.left ? props.left : null,
                width: props.width,
                height: props.height,
                gap: 10,
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
            {
                // [...Array(12)].map((item, index) => {
                props.seats.map((item, index) => {
                    let value = index + 1;
                    value = value <= 9 ? `0${value}` : value;

                    const booked = item.bookedDates.find(date => date === props.selectedDate);

                    const showCompartment = () => {
                        if (booked != undefined) {
                            return (
                                <View
                                    key={props.prefix + index}
                                    style={{
                                        width: props.compartmentWidth,
                                        height: props.compartmentHeight,
                                    }}>
                                    <SvgCompartmentBooked value={value} />
                                </View>
                            );
                        } else if (props.prefix + index === props.selectedSeat) {
                            return (
                                <TouchableOpacity
                                    key={props.prefix + index}
                                    onPress={() => handleSeatSelection(props.prefix + index)}
                                    style={{
                                        width: props.compartmentWidth,
                                        height: props.compartmentHeight,
                                    }}>
                                    <SvgCompartmentSelected value={value} />
                                </TouchableOpacity>
                            );
                        } else {
                            return (
                                <TouchableOpacity
                                    key={props.prefix + index}
                                    onPress={() => handleSeatSelection(props.prefix + index)}
                                    style={{
                                        width: props.compartmentWidth,
                                        height: props.compartmentHeight,
                                    }}>
                                    <SvgCompartment value={value} />
                                </TouchableOpacity>
                            );
                        }
                    };


                    return (
                        showCompartment()
                    );
                })
            }
        </View>
    );
};
