import {View, Text} from 'react-native';
import {useEffect} from 'react';
import database from '@react-native-firebase/database';

const BookSeats = () => {
  useEffect(() => {
    database()
      .ref('/users/123')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
      });
  }, []);

  return (
    <View>
      <Text>BookSeats</Text>
    </View>
  );
};

export default BookSeats;
