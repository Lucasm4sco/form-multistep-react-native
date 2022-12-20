import { TouchableOpacity, Text, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";

const ButtonRestart = ({ setData, formTemplate, changeStep }) => {

    const restartForm = async () => {
        Alert.alert(
            null,
            "Seus dados serão apagados, deseja mesmo reiniciar?",
            [
                { text: "Não" },
                {
                    text: "Sim", onPress: () => {
                        setData(formTemplate);
                        changeStep(0);
                    }
                }
            ]
        );
    }

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={restartForm}
        >
            <LinearGradient
                style={styles.gradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
                colors={['#9E35D1', '#A222CE']}
            >
                <Text style={styles.titleButton}>Reiniciar</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
};

export default ButtonRestart;