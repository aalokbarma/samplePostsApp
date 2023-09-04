import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    signUpScreen:{
        flex: 1,
        backgroundColor: '#fff',
    },
    bottomContainer: {
        paddingHorizontal: 35,
        backgroundColor: '#fff',
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