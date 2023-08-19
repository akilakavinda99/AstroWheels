import {ToastAndroid} from 'react-native';
import {documentNames} from '../../constants/firebaseConstants/documentNames';
import {AppContext, useAppContext} from '../../context/AppContext';
import {getDataFromFirebase} from '../../utiils/firebaseServices/firebaseCrud';
import {asyncKeys} from '../../constants/asyncKeys';
import {storeData} from '../../utiils/asyncStore/asyncStoreFunctions';
import {stackNames} from '../../constants/navigationConstants/stackNames';
import {screenNames} from '../../constants/navigationConstants/screenNames';

export const getUserData = async userId => {
  //   const {user, setUser} = useAppContext();
  if (!userId) {
    console.error('User ID is required.');
    return;
  }

  const reference = `${documentNames.USERS}/${userId}`;
  try {
    const user = await getDataFromFirebase({reference});
    console.log('user: ', user);
    return user;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

export const launchFunction = async (userId, navigation) => {
  // const asyncUserId = await getD
  if (userId == null) {
    ToastAndroid.show('Please use signup', ToastAndroid.SHORT);
  } else {
    const userIdStored = await storeData({
      key: asyncKeys.USER_ID,
      value: userId.toString(),
    });
    console.log('userIdStored: ', userIdStored);
    if (userIdStored) {
      navigation.navigate(stackNames.AUTH_STACK, {
        screen: screenNames.Login_ID_Screen,
        params: {
          userId,
        },
      });
    }
  }
};
