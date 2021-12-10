import { StyleSheet } from 'react-native';

const StyledBg = StyleSheet.create({
    Background: {
        width: '100%',
    },
    Image: {
        width: '100%',
        height: 270,
        position: 'absolute',
        zIndex: 1,
    },
    NSeries: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 215,
        zIndex: 2,
    },
    Logo: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    TextSeries: {
        fontSize: 19,
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        textTransform: 'uppercase',
        opacity: 0.8,
        letterSpacing: 2,
        marginRight: 5,
    },
    Title: {
        fontSize: 45,
        color: '#FFF',
        zIndex: 2,
        letterSpacing: 4,
        lineHeight: 60,
        fontWeight: '800',
        textAlign: 'center',
        fontFamily: 'SONGER',
    },
    Genre: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    TextGenre: {
        letterSpacing: 1,
        color: '#FFF',
        fontSize: 14
    },
    Options: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    Option: {
        width: 70,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextOption: {
        color: '#FFF',
        fontSize: 13
    },
    View: {
        backgroundColor: '#FFF',
        borderRadius: 3,
        paddingVertical: 3,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextView: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 2
    }
})

export default StyledBg;