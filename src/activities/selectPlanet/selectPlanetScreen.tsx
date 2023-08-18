import {View, Text, Button} from 'react-native';

import theme from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {stackNames} from '../../constants/navigationConstants/stackNames';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import database from '@react-native-firebase/database';
import {useEffect, useState} from 'react';

const SelectPlanetScreen = ({navigation}: any) => {
  // const SelectPlanetScreen = () => {
  // const [bookings, setBookings] = useState();
  const [seats, setSeats] = useState([]);
  // useEffect(() => {
  //   console.log('bookings: ', bookings);
  // }, [bookings]);

  useEffect(() => {
    const onValue = database()
      .ref('/spaceships/1 /seat')
      .on('value', snapshot => {
        console.log('User data CHANGED: ', snapshot.val());
        const arr = snapshot.val();
        setSeats(arr[0].seats);
      });
    // return () => database().ref(`/spaceships/1 /seat`).off('value', onValueChange);
  }, []);
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary.primary100,
        flex: 1,
      }}>
      <Text
        style={{
          fontFamily: theme.fonts.medium,
        }}>
        Screensd
      </Text>
      <Button
        title="submit"
        onPress={() =>
          navigation.navigate(stackNames.BOOKING_STACK, {
            screen: screenNames.StartExplore_Screen,
          })
        }></Button>
      <Button
        title="Press ME"
        onPress={() => {
          database()
            .ref('/spaceships/1 /bookings')
            .once('value')
            .then(snapshot => {
              const arr = snapshot.val();
              console.log('arr: ', arr);
              for (let index = 0; index < arr.length; index++) {
                // console.log('index: ', index);
                const element = arr[index];
                if (element.date == '2021-10-01') {
                  console.log(element);
                  // setBookings(element.seats);
                }
              }

              console.log('User data: ', snapshot.val());
            });
        }}
      />
      <Button
        title="ETCH"
        onPress={() => {
          database()
            .ref('/spaceships/1 /bookings')
            .once('value')
            .then(snapshot => {
              const targetDate = '2021-10-01';

              const arr = snapshot.val();
              const updatedBookings = arr.map(booking => {
                if (booking.date === targetDate) {
                  // Clone the booking object and add the new seat to the seats array
                  return {
                    ...booking,
                    seats: [...booking.seats, 40],
                  };
                }
                return booking;
              });

              console.log('User data: ', updatedBookings);

              database()
                .ref('/spaceships/1 /')
                .update({bookings: updatedBookings});
            });
        }}
      />
      <Button
        title="sdsd"
        onPress={() => {
          database()
            .ref('/spaceships/1 /seat')
            .once('value')
            .then(snapshot => {
              const arr = snapshot.val();
              console.log('seat: ', arr);
              const packageId = 2;
              const seatId = 2;
              const updatedSeats = arr.map(packageSeat => {
                if (packageSeat.packageId === packageId) {
                  console.log('packageSeat: ', packageSeat);
                  const updatedSeat = packageSeat.seats.find(
                    seat => seat.seatId === seatId,
                  );
                  if (updatedSeat) {
                    updatedSeat.booked = true;
                  }
                }
                return packageSeat;
              });
              database()
                .ref('/spaceships/1 /')
                .update({seat: updatedSeats})
                .then(() => console.log('done'));
            });
        }}
      />

      {seats.map(item => {
        return (
          <View>
            <Text>{item.seatId}</Text>
            {item.booked == true ? (
              <Text>Booked</Text>
            ) : (
              <Text>Not Booked</Text>
            )}
            {/* <Text>{item.booked}</Text> */}
          </View>
        );
      })}
    </View>
  );
};

export default SelectPlanetScreen;
