import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import theme from '../../theme/theme';

export const bookingStyles = StyleSheet.create({
    maintitle: {
        color: '#E6E5E6',
        fontFamily: theme.fonts.bold,
        fontSize: 20,
        fontWeight: '500',
        margin: moderateScale(12),
    },
    backgroundImage: { flex: 1, width: '100%', height: 960 },
    topsection: {

        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: moderateScale(10),

    },
    backgroundimg: {
        padding: moderateScale(15),
        borderRadius: 8,
        height: 120,
    },

    topsectiontwo: {
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: moderateScale(10),
    },
    bottomsection: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: moderateScale(10),
        columnGap: 10,
    },
    subsection: {
        flex: 0.5,
        height: 100,
        overflow: 'hidden',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        color: '#E6E5E6',
        fontWeight: '500',
        lineHeight: 22,
        fontFamily: theme.fonts.bold,
    },
    para: {
        fontSize: 13,
        color: '#A792BC',
        fontFamily: theme.fonts.medium,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        backgroundColor: '#0D0712',
        height: 50,
        borderRadius: 10

    },

    screenButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#0D0712',
        borderRadius: 8,
        marginHorizontal: 10,
        height: 40,
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    activeButton: {
        backgroundColor: '#40235E',
    },

    buttonText: {
        color: '#9A989A',
        fontSize: 15,
        fontWeight: 'bold',
    },

    animatedView: {
        position: 'relative',
        zIndex: -10,
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    spaceship: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
