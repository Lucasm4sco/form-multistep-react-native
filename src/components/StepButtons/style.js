import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 10
    },
    viewButtonFirstStep: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        marginTop: 10
    },
    button: {
        backgroundColor: '#9D39E4',
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;