import {ToastAndroid} from 'react-native';

export const showShortToast = (message: string) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};
