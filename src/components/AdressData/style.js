import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputsContainer: {
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: '600',
        color: '#777',
    },
    labelInput: {
        alignSelf: 'flex-start',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: '600'
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#2A0B5D',
        borderRadius: 20,
        padding: 8,
        marginBottom: 30,
        fontSize: 16
    },
    inputError: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 20,
        padding: 8,
        marginBottom: 30,
        fontSize: 16
    }
});

export default styles;