import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: '#fff',
        // flex: 1,
        width: '100%',
        height: '100%',
    },
    nothingComponentContainer: {
        display: 'flex',
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataText: {
        fontSize: 25,
        color: '#888',
        fontWeight: '700',
        marginVertical: 20,
    },
});

export default Styles;