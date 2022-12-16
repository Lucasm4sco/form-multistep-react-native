import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";

const ComponentStep = ({children, isCurrentStep}) => {
  return isCurrentStep ? (
      <LinearGradient
        style={styles.viewGradient}
        colors={['#6816a2','#410979']}
        start={{x: 0, y: 0.2}}
      >
        {children}
      </LinearGradient>
    ) : (
      <View style={styles.viewStep}>
        {children}
      </View>
    )
}
   
const Steps = ({isFirstStep, isLastStep}) => {
  return (
    <View style={styles.container_steps}>
          <ComponentStep isCurrentStep={true} >
            <Text style={styles.step_text_active}>
              1
            </Text>
          </ComponentStep>
          <View style={ !isFirstStep ? styles.line_step_active : styles.line_step}></View>
          <ComponentStep isCurrentStep={!isFirstStep} >
            <Text style={ !isFirstStep ? styles.step_text_active : styles.step_text }>
              2
            </Text>
          </ComponentStep>
          <View style={ isLastStep ? styles.line_step_active : styles.line_step}></View>
          <ComponentStep isCurrentStep={isLastStep} >
            <Text style={ isLastStep ? styles.step_text_active : styles.step_text }>
              3
            </Text>
          </ComponentStep>
    </View>
  )
}

export default Steps;