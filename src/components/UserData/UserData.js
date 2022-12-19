import { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./style";

import imgAstronaut from "../../../assets/astronaut.jpg";

const formErrors = {
  errorFirstName: false,
  errorLastName: false,
  errorEmail: false
}

const UserData = forwardRef(({ data, setData }, ref) => {
  const [errors, setErrors] = useState(formErrors);

  useImperativeHandle(ref, () => {
    return {
      validate: (changeStep, nextStep) => {
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        const isValidEmail = emailRegex.test(data.email);
        
        const invalidName = data.name.firstName.trim() === '' || data.name.lastName.trim() === '';

        if (invalidName || !isValidEmail) {
          setErrors({
            errorFirstName: data.name.firstName.trim() === '',
            errorLastName: data.name.lastName.trim() === '',
            errorEmail: !isValidEmail
          });
          return alert('Defina um Nome ou E-mail válido!');
        } 
          
        changeStep(nextStep);
      }
    }
  })

  const changeName = (text, key) => {
    const lastIndex = text[text.length - 1];
    const lastIndexIsNumber = !isNaN(Number(lastIndex));

    if (lastIndexIsNumber && lastIndex !== ' ')
      return

    setData((prevData) => ({ 
      ...prevData, 
      'name': {
        ...prevData.name,
        [key]: text
      }
    }));
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
        style={errors.errorFirstName ? styles.inputError : styles.input}
        placeholder="Primeiro nome"
        selectionColor='#CFAAF9'
        autoCapitalize='sentences'
        value={data.name.firstName}
        onChangeText={(text) => changeName(text, 'firstName')}
      />
      <Text style={styles.labelInput}>Sobrenome: </Text>
      <TextInput
        style={errors.errorLastName ? styles.inputError : styles.input}
        placeholder="Sobrenome"
        selectionColor='#CFAAF9'
        autoCapitalize='sentences'
        value={data.name.lastName}
        onChangeText={(text) => changeName(text, 'lastName')}
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