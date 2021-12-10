import { StyleSheet } from 'react-native';

const StyledHeader = StyleSheet.create({
    Header: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Top: {
        width: '95%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Logo: {
        width: 30,
        height: 40,
        resizeMode: 'contain'
    },
    User: {
        width: 25,
        height: 25,
    },
    Bottom: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    Option: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        opacity: 0.9
    },
    TextOption: {
        color: '#FFF',
        fontSize: 15,
        letterSpacing: 0.5
    }
})

export default StyledHeader;