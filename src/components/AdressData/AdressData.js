import { forwardRef, useImperativeHandle, useState } from "react";
import { View, Text, TextInput } from "react-native"
import styles from "./style";

const formErrors = {
  errorStreet: false,
  errorDistrict: false,
  errorNumberLocal: false,
  errorCity: false,
  errorPhoneNumber: false
}

const AdressData = forwardRef(({ data, setData }, ref) => {

  const [errors, setErrors] = useState(formErrors);

  const changeAdress = (text, key) => {
    setData({
      ...data,
      adress: {
        ...data.adress,
        [key]: text
      }
    })
  }

  const checkEmptySpaces = (obj) => {
    for (let key in obj)
      if(obj[key].trim() === '')
        return true;

    return false;
  }

  useImperativeHandle(ref, () => {
    return {
      validate: (changeStep, nextStep) => {
        const hasEmptySpaces = checkEmptySpaces(data.adress);

        if (hasEmptySpaces) {
          setErrors({
            errorStreet: data.adress.street.trim() === '',
            errorDistrict: data.adress.district.trim() === '',
            errorNumberLocal: data.adress.numberLocal.trim() === '',
            errorCity: data.adress.city.trim() === '',
            errorPhoneNumber: data.phoneNumber.trim() === ''
          });
          return alert('Preencha os campos corretamente!');
        }

        return changeStep(nextStep);
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
      <TextInput
        style={errors.errorStreet ? styles.inputError : styles.input}
        placeholder="Endereço"
        selectionColor='#CFAAF9'
        autoCapitalize='sentences'
        value={data.adress.street}
        onChangeText={(text) => changeAdress(text, 'street')}
      />
      <View style={styles.viewRow}>
        <View style={styles.viewInputDistrict}>
          <Text style={styles.labelInput}>Bairro</Text>
          <TextInput
            style={errors.errorDistrict ? styles.inputError : styles.input}
            placeholder="Bairro"
            selectionColor='#CFAAF9'
            autoCapitalize='sentences'
            value={data.adress.district}
            onChangeText={(text) => changeAdress(text, 'district')}
          />
        </View>
        <View style={styles.viewNumberLocal}>
          <Text style={styles.labelInput}>N°</Text>
          <TextInput
            style={errors.errorNumberLocal ? styles.inputError : styles.input}
            placeholder="N°"
            selectionColor='#CFAAF9'
            autoCapitalize='sentences'
            value={data.adress.numberLocal}
            onChangeText={(text) => changeAdress(text, 'numberLocal')}
          />
        </View>
      </View>
      <Text style={styles.labelInput}>Cidade</Text>
      <TextInput
        style={errors.errorCity ? styles.inputError : styles.input}
        placeholder="Cidade"
        selectionColor='#CFAAF9'
        autoCapitalize='sentences'
        value={data.adress.city}
        onChangeText={(text) => changeAdress(text, 'city')}
      />
      <Text style={styles.labelInput}>Telefone</Text>
      <TextInput
        style={errors.errorPhoneNumber ? styles.inputError : styles.input}
        placeholder="(44) 99999-9999"
        selectionColor='#CFAAF9'
        autoCapitalize='sentences'
        value={data.phoneNumber}
        onChangeText={(text) => setData({ ...data, phoneNumber: text })}
      />
    </View>
  )
})

export default AdressData;