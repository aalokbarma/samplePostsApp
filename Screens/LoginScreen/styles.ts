import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    loginScreen: {
        backgroundColor: '#fff',
        flex: 1,
    },
    orLine: {
        paddingHorizontal: 35,
        backgroundColor: '#fff',
        width: '100%',
        height: 'auto',
        marginTop: 15,
    },
    emptyLine: {
        width: '100%',
        height: 2,
        backgroundColor: '#C4C1C1',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -10,
        marginBottom: 10,

    },
    orTextContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    orText: {
        color: '#C4C1C1',
        fontSize: 14,
        backgroundColor: '#fff',
        marginTop: -25,
        paddingHorizontal: 5,
        
    },
    bottomContainer: {
        paddingHorizontal: 35,
        backgroundColor: '#fff',
        marginTop: 15,
    },
    
    signinButtonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    joinedText: {
        fontSize: 16,
        fontFamily: "Inter-Medium",
        color: '#121212',
    },
    signinText: {
        fontSize: 16,
        fontFamily: "Inter-Medium",
        color: '#1A5EDE'
    },
});

export default Styles;