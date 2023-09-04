import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    postScreenContainer: {
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
        height: '100%',
    },

    postHeader: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#1A5EDE',
        padding: 15,
    },
    backButtonContainer: {
        paddingHorizontal: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: '#fbfbfb',
        borderRightWidth: 2,
        marginRight: 15,
    },
    postHeaderText: {
        fontSize: 30,
        fontWeight: '800',
        color: '#fbfbfb',
    },


    postContainer: {
        display: 'flex',
        width: '100%',
        height: 'auto',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postHeading: {
        fontSize: 18,
        fontWeight:'800',
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: '#1b1b1b'
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#888',
    },
    postBody: {
        fontSize: 18,
        fontWeight:'400',
        width: '100%',
        textAlign: 'left',
        color: '#333',
        marginTop: 20,
    },
    contentContainer: {
        display:'flex',
        borderColor: '#888',
        borderWidth: 0.5,
        borderRadius: 7,
        padding: 15,
        width: '100%'
    },
});

export default Styles;