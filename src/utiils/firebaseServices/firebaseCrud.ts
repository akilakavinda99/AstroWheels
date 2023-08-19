import database from '@react-native-firebase/database';
import {documentNames} from '../../constants/firebaseConstants/documentNames';

export const addDataToFirebase = async ({reference, data}: any) => {
  database()
    .ref(`/${reference}`)
    .set(data)
    .then(() => console.log('Data set.'))
    .catch(error => console.log(error));
};

export const updateDataInFirebase = async ({reference, data}: any) => {
  database()
    .ref(`/${reference}`)
    .update(data)
    .then(() => console.log('Data set.'))
    .catch(error => console.log(error));
};

export const getDataFromFirebase = async ({reference}: any) => {
  try {
    console.log(reference);
    const snapshot = await database().ref(`/${reference}`).once('value');
    console.log('Sdsds', snapshot.val());
    return snapshot.val();
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return null;
  }
};
