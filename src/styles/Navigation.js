import { StyleSheet } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({

    container: {
        backgroundColor: colors.primaryBackground,
        borderColor: colors.white,
        borderColor: 'white',
        // borderTopWidth: 0.2,
    },
    activeContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderWidth: 0.4,
        borderBottomWidth: 0,

    },
    inActiveContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: 'white',

        backgroundColor: 'transparent',
        borderWidth: 1,
        borderBottomWidth: 0
    }

});