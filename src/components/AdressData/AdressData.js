import { forwardRef, useImperativeHandle } from "react";
import { View, Text, TextInput } from "react-native"
import styles from "./style";

const AdressData = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        console.log('ok')
      },
      goBack: (changeStep, prevStep) => {
        changeStep(prevStep)
      }
    }
  })

  return (
    <View style={styles.inputsContainer}>
        <Text style={styles.title}>Endereço: </Text>
        <Text style={styles.labelInput}>Rua</Text>

    </View>
  )
})

export default AdressData;