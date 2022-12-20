import { View, Text, Image } from "react-native";
import styles from "./style";

import imgChecked from '../../../assets/checked.png';

const ShippingForm = () => {
    return (
        <View style={styles.message_container}>
            <Text style={styles.titleMessage}>Seus dados foram enviados</Text>
            <Image
                source={imgChecked}
                style={styles.imgChecked}
            />
            <Text style={styles.paragraph}>Aguarde até 24 horas para receber a confirmação de seu cadastro</Text>
        </View>
    )
};

export default ShippingForm;