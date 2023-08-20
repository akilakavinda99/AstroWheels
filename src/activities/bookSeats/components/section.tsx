import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Seat} from '../types';
import SvgCompartment from './svgCompartment';
import SvgCompartmentBooked from './svgCompartmentBooked';
import SvgCompartmentSelected from './svgCompartmentSelected';

export const PackageSection = (props: any) => {
  const handleSeatSelection = (seat: string | null) => {
    if (props.selectedSeat === seat) {
      seat = null;
    }

    props.selectSeat(seat);
  };
  return (
    <View
      style={[
        styles.sectionView,
        {
          top: props.top,
          left: props.left ? props.left : null,
          width: props.width,
          height: props.height,
        },
      ]}>
      {
        // [...Array(12)].map((item, index) => {
        props.seats.map((item: Seat, index: number) => {
          let value: number | string = index + 1;
          value = value <= 9 ? `0${value}` : value;

          let booked: boolean;
          if (
            item.bookedDates !== undefined &&
            item.bookedDates[props.selectedDate] !== undefined
          ) {
            booked = true;
          }

          const showCompartment = () => {
            if (booked) {
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

          return showCompartment();
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  sectionView: {
    position: 'absolute',
    gap: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
