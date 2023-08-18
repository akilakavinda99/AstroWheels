import theme from '../theme/theme';
import { StyleSheet, Platform, StatusBar } from "react-native";
export const AndroidSafeArea ={
    flex: 1,
    paddingTop: Platform.OS === "android" ? 0:0
}