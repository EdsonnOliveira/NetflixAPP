import { StyleSheet } from 'react-native';

const StyledNav = StyleSheet.create({
    Navigation: {
        width: '100%',
        height: 70,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Option: {
        width: 80,
        height: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7
    },
    TextOption: {
        color: '#FFF',
        fontSize: 13,
        marginTop: 3
    }
})

export default StyledNav