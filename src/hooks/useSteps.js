import { useState } from "react";

export const UseSteps = (steps) => {
    const [ currentStep, setCurrentStep ] = useState(2);

    const changeStep = (i) => {
        if(i < 0 || i >= steps.length) return

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isFirstStep: currentStep === 0,
        isLastStep: (currentStep + 1) === steps.length
    }
}