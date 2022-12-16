import { View } from "react-native"
import { UseSteps } from "../../hooks/useSteps"
import styles from "./style"

import Steps from "../Steps/Steps";
import UserData from "../UserData/UserData";
import { useEffect } from "react";

const steps = [ <UserData />, <UserData />, <UserData /> ]

const Form = () => {
    const { isFirstStep, isLastStep, changeStep, currentStep } = UseSteps(steps);
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
        </View>
    )
}

export default Form