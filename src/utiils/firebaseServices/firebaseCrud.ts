import database from '@react-native-firebase/database';

export const addDataToFirebase = async ({reference, data}: any) => {
  database()
    .ref(reference)
    .set(data)
    .then(() => console.log('Data set.'))
    .catch(error => console.log(error));
};

export const updateDataInFirebase = async ({reference, data}: any) => {
  database()
    .ref(reference)
    .update(data)
    .then(() => console.log('Data set.'))
    .catch(error => console.log(error));
};
