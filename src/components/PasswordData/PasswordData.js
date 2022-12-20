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
  const [confirmPassword, setConfirmPassword] = useState('');

  const changeData = (text, key) => {
    setData({
      ...data,
      [key]: text
    })
  }

  useImperativeHandle(ref, () => {
    return {
      validate: (changeStep, prevStep) => {
        const wrongPassword = data.password !== confirmPassword;
        const smallPassword = data.password.length < 6;
        const emptySpace = data.password.trim() === '' || data.username.trim() === '';

        if (wrongPassword || smallPassword || emptySpace) {
          setErrors({
            errorUsername: data.username.trim() === '',
            errorPassword: smallPassword || wrongPassword,
            errorConfirmPassword: smallPassword || wrongPassword,
            errorCheckbox: !selectCheckbox
          });
          if(emptySpace) return alert('Preencha os campos corretamente!');
          if(wrongPassword) return alert('As senhas devem ser iguais!');
          if(smallPassword) return alert('A senha deve conter no minímo 6 caracteres.')
        }

        if(!selectCheckbox) {
          return setErrors({
            ...formErrors,
            errorCheckbox: !selectCheckbox
          })
        }

        changeStep(prevStep)
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
        style={errors.errorUsername ? styles.inputError : styles.input}
        placeholder="Username"
        selectionColor='#CFAAF9'
        autoCapitalize='sentences'
        onChangeText={(text) => changeData(text, 'username')}
      />
      <Text style={styles.labelInput}>Senha</Text>
      <TextInput
        style={errors.errorPassword ? styles.inputError : styles.input}
        placeholder="Crie uma senha"
        selectionColor='#CFAAF9'
        secureTextEntry={true}
        onChangeText={(text) => changeData(text, 'password')}
      />
      <Text style={styles.labelInput}>Confirmar senha</Text>
      <TextInput
        style={errors.errorConfirmPassword ? styles.inputError : styles.input}
        placeholder="Confirme sua senha"
        selectionColor='#CFAAF9'
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <BouncyCheckbox
        size={20}
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