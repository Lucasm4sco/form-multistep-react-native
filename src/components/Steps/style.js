import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container_steps: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    viewStep: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bfbfbf'
    },
    viewGradient: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    step_text: {
        fontWeight: '700',
        color: '#555'
    },
    step_text_active: {
        fontWeight: '700',
        color: '#FFF'
    },
    line_step: {
        width: '20%',
        height: 5,
        backgroundColor: '#bfbfbf'
    },
    line_step_active: {
        width: '20%',
        height: 5,
        backgroundColor: '#410979'
    }
});

export default styles;