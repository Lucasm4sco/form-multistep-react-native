import { View } from "react-native"
import { UseSteps } from "../../hooks/useSteps"
import styles from "./style"

import Steps from "../Steps/Steps";
import UserData from "../UserData/UserData";
import AdressData from "../AdressData/AdressData";
import PasswordData from "../PasswordData/PasswordData";
import { useEffect } from "react";

const steps = [ <UserData />, <AdressData />, <PasswordData /> ]

const dataForm = {
    name: '',
    email: '',
    adress_street: ''
}

const Form = () => {
    const { isFirstStep, isLastStep, changeStep, currentStep, currentComponent } = UseSteps(steps);

    useEffect(() => {
        setTimeout(() => {
            changeStep(currentStep + 1)
        }, 3000)
    }, [currentStep])

    return (
        <View style={styles.form_container}>
            <Steps 
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
            />
            {currentComponent}
        </View>
    )
}

export default Form