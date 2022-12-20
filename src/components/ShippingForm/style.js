import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    message_container: {
        alignItems: 'center',
    },
    titleMessage: {
        color: 'green',
        fontSize: 22,
        marginVertical: 30
    },
    imgChecked: {
        width: 80,
        height: 80,
        marginVertical: 20
    },
    paragraph: {
        textAlign: 'center',
        color: '#777',
        fontSize: 16,
        marginVertical: 30,
        paddingHorizontal: 5
    },
    button: {
        height: 40,
        width: 110,
        marginVertical: 20
    },
    gradient: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    titleButton: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 16
    }
});

export default styles;