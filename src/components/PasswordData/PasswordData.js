import { forwardRef, useImperativeHandle, useState } from "react";
import { View, TextInput, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./style";

const formErrors = {
  errorUsername: false,
  errorPassword: false,
  errorConfirmPassword: false,
  errorCheckbox: false
}

const PasswordData = forwardRef(({ data, setData }, ref) => {

  const [errors, setErrors] = useState(formErrors);
  const [selectCheckbox, setSelectCheckbox] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      validate: (changeStep, prevStep) => {

      },
      goBack: (changeStep, prevStep) => {
        changeStep(prevStep);
      }
    }
  });

  return (
    <View style={styles.inputsContainer}>
      <Text style={styles.labelInput}>Nome de usuário</Text>
      <TextInput
        style={errors.errorStreet ? styles.inputError : styles.input}
        placeholder="Username"
        selectionColor='#CFAAF9'
        autoCapitalize='sentences'

      />
      <Text style={styles.labelInput}>Senha</Text>
      <TextInput
        style={errors.errorStreet ? styles.inputError : styles.input}
        placeholder="Crie uma senha"
        selectionColor='#CFAAF9'
        secureTextEntry={true}
      />
      <Text style={styles.labelInput}>Confirmar senha</Text>
      <TextInput
        style={errors.errorStreet ? styles.inputError : styles.input}
        placeholder="Confirme sua senha"
        selectionColor='#CFAAF9'
        secureTextEntry={true}
      />
        <BouncyCheckbox
          size={18}
          style={styles.checkbox}
          fillColor="#2196F3"
          unfillColor="#FFFFFF"
          text="Aceito os termos e condições"
          innerIconStyle={{ 
            borderWidth: 1,
            borderColor: '#2196F3'
          }}
          textStyle={{
            textDecorationLine: "none",
            color: errors.errorCheckbox ? 'red' : '#444'
          }}
          onPress={(isChecked) => setSelectCheckbox(isChecked)}
        />
    </View>
  )

});

export default PasswordData;