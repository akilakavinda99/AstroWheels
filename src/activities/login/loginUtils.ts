import {documentNames} from '../../constants/firebaseConstants/documentNames';
import {AppContext, useAppContext} from '../../context/AppContext';
import {getDataFromFirebase} from '../../utiils/firebaseServices/firebaseCrud';

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
