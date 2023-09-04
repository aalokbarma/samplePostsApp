import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
    postCardContainer: {
        width: Dimensions.get('window').width,
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    postCard: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: Dimensions.get('window').width - 30,
        height: 'auto',
        borderColor: '#888',
        borderWidth: 0.5,
        backgroundColor: '#fbfbfb',
        padding: 15,
        borderRadius: 10
    },
    postTitle: {
        fontSize: 18,
        fontWeight: '800',
        width: '100%',
    },
    postBody: {
        fontSize: 16,
        fontWeight: '400',
        width: '100%',
    },
});

export default Styles;