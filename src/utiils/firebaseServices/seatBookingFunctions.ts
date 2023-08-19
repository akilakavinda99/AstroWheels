import database from '@react-native-firebase/database';

export const updateSpaceshipSeats = async ({reference, packageId, seatId}) => {
  database()
    .ref(reference)
    .once('value')
    .then(snapshot => {
      const arr = snapshot.val();
      console.log('seat: ', arr);

      const updatedSeats = await arr.map(packageSeat => {
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
};

export const updateSpaceshipBookings = async ({reference, targetDate}) => {
  database()
    .ref(reference)
    .once('value')
    .then(snapshot => {
      //   const targetDate = '2021-10-01';

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

      database().ref('/spaceships/1 /').update({bookings: updatedBookings});
    });
};
