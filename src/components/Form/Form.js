import { useState, useRef } from "react";
import { View, TouchableHighlight } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { UseSteps } from "../../hooks/useSteps";
import styles from "./style"

import Steps from "../Steps/Steps";
import UserData from "../UserData/UserData";
import AdressData from "../AdressData/AdressData";
import PasswordData from "../PasswordData/PasswordData";

const formTemplate = {
    name: {
        firstName: '',
        lastName: ''
    },
    email: '',
    adress: {
        street: '',
        numberLocal: '',
        discrict: '',
        city: ''
    },
    phoneNumber: '',
    username: '',
    password: ''
}

const Form = () => {
    const [data, setData] = useState(formTemplate);
    const componenteRef = useRef();

    const formSteps = [
        <UserData 
            data={data} 
            setData={setData} 
            ref={componenteRef} 
            />,
        <AdressData data={data} setData={setData} ref={componenteRef} />,
        <PasswordData data={data} setData={setData} ref={componenteRef} />
    ];

    const { isFirstStep, isLastStep, changeStep, currentComponent , currentStep} = UseSteps(formSteps);

    return (
        <View style={styles.form_container}>
            <Steps
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
            />
            
            {currentComponent}
            {isFirstStep  ? (
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
            )}
        </View>
    )
}

export default Form