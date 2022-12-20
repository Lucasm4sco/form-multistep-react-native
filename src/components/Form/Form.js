import { useState, useRef } from "react";
import { View } from "react-native";
import { UseSteps } from "../../hooks/useSteps";
import styles from "./style"

import Steps from "../Steps/Steps";
import StepButtons from "../StepButtons/StepButtons";
import ButtonRestart from "../ButtonRestart/ButtonRestart";
import UserData from "../UserData/UserData";
import AdressData from "../AdressData/AdressData";
import PasswordData from "../PasswordData/PasswordData";
import ShippingForm from "../ShippingForm/ShippingForm";

const formTemplate = {
    name: {
        firstName: '',
        lastName: ''
    },
    email: '',
    adress: {
        street: '',
        numberLocal: '',
        district: '',
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
        <UserData data={data} setData={setData} ref={componenteRef} />,
        <AdressData data={data} setData={setData} ref={componenteRef} />,
        <PasswordData data={data} setData={setData} ref={componenteRef} />,
        <ShippingForm />
    ];

    const { isFirstStep, isLastStep, changeStep, currentComponent, currentStep, isShipping } = UseSteps(formSteps);

    return (
        <View style={styles.form_container}>
            <Steps
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                isShipping={isShipping}
            />

            {currentComponent}
            {isShipping ? (
                <ButtonRestart 
                    setData={setData}
                    formTemplate={formTemplate}
                    changeStep={changeStep}
                />
            ) : (
                <StepButtons
                    isFirstStep={isFirstStep}
                    changeStep={changeStep}
                    componenteRef={componenteRef}
                    currentStep={currentStep}
                />
            )}
        </View>
    )
}

export default Form