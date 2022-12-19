import { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./style";

import imgAstronaut from "../../../assets/astronaut.jpg";

const formErrors = {
  errorName: false,
  errorEmail: false
}

const UserData = forwardRef(({ data, setData }, ref) => {
  const [errors, setErrors] = useState(formErrors);

  useImperativeHandle(ref, () => {
    return {
      validate: (changeStep, nextStep) => {
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        const isValidEmail = emailRegex.test(data.email);

        if (data.name.trim() === '' || !isValidEmail) {
          setErrors({
            errorName: data.name.trim() === '',
            errorEmail: !isValidEmail
          });
          return alert('Defina um Nome ou E-mail válido!');
        } 
          
        changeStep(nextStep);
      }
    }
  })

  const changeName = (text) => {
    const lastIndex = text[text.length - 1];
    const lastIndexIsNumber = !isNaN(Number(lastIndex));

    if (lastIndexIsNumber && lastIndex !== ' ')
      return

    setData((prevData) => ({ ...prevData, 'name': text }));
  }

  return (
    <View style={styles.inputsContainer}>
      <View style={styles.viewImg}>
        <Image source={imgAstronaut}
          style={styles.img}
        />
        <Text style={styles.title}>Cadastre-se</Text>
      </View>
      <Text style={styles.labelInput}>Nome: </Text>
      <TextInput
        style={errors.errorName ? styles.inputError : styles.input}
        placeholder="Nome Completo"
        selectionColor='#CFAAF9'
        autoCapitalize='sentences'
        value={data.name}
        onChangeText={(text) => changeName(text)}
      />
      <Text style={styles.labelInput}>E-mail: </Text>
      <TextInput
        style={errors.errorEmail ? styles.inputError : styles.input}
        placeholder="example@email.com"
        selectionColor='#CFAAF9'
        autoCapitalize='sentences'
        value={data.email}
        onChangeText={(text) => setData({ ...data, email: text })}
      />
    </View>
  )
})

export default UserData;