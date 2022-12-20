import { View, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './style';

const StepButtons = ({isFirstStep, currentStep, changeStep, componenteRef}) => {
    return isFirstStep ? (
        <View style={styles.viewButtonFirstStep}>
            <TouchableHighlight
                style={styles.button}
                onPress={() => componenteRef.current.validate(changeStep, currentStep + 1)}
                underlayColor='#551583'
            >
                <MaterialIcons name="keyboard-arrow-right" size={38} color="white" />
            </TouchableHighlight>
        </View>
        
    ) : (
        <View style={styles.viewButtons}>
            <TouchableHighlight
                style={styles.button}
                onPress={() => componenteRef.current.goBack(changeStep, currentStep - 1)}
                underlayColor='#551583'
            >
                <MaterialIcons name="keyboard-arrow-left" size={38} color="white" />
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}
                onPress={() => componenteRef.current.validate(changeStep, currentStep + 1)}
                underlayColor='#551583'
            >
                <MaterialIcons name="keyboard-arrow-right" size={38} color="white" />
            </TouchableHighlight>
        </View>
    )
};

export default StepButtons;