import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async ({key, value}: any) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.error('Error saving data: ', e);
    return false;
    // saving error
  }
};
