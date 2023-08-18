import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async ({key, value}: any) => {
  try {
    await AsyncStorage.setItem('my-key', value);
    return true;
  } catch (e) {
    return false;
    // saving error
  }
};
