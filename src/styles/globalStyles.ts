import theme from '../theme/theme';
import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const AndroidSafeArea = {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 0 : 0
}