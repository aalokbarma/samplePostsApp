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
    refreshButton: {
        backgroundColor: '#1A5EDE',
        borderRadius: 10,
        padding: 10,
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: 30,
        right: 30,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Styles;