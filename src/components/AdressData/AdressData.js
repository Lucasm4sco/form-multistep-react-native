import { forwardRef, useImperativeHandle } from "react";
import { View, Text, TextInput } from "react-native"
import styles from "./style";

const AdressData = forwardRef(({ data, setData }, ref) => {

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
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          selectionColor='#CFAAF9'
          autoCapitalize='sentences'
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
        />
        <View style={styles.viewRow}>
          <View style={styles.viewInputDistrict}>
            <Text style={styles.labelInput}>Bairro</Text>
            <TextInput
              style={styles.input}
              placeholder="Bairro"
              selectionColor='#CFAAF9'
              autoCapitalize='sentences'
              value={data.email}
              onChangeText={(text) => setData({ ...data, email: text })}
            />
          </View>
          <View style={styles.viewNumberLocal}>
            <Text style={styles.labelInput}>N°</Text>
            <TextInput
              style={styles.input}
              placeholder="N°"
              selectionColor='#CFAAF9'
              autoCapitalize='sentences'
              value={data.email}
              onChangeText={(text) => setData({ ...data, email: text })}
            />
          </View>
        </View>
        <Text style={styles.labelInput}>Cidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          selectionColor='#CFAAF9'
          autoCapitalize='sentences'
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
        />
        <Text style={styles.labelInput}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(44) 99999-9999"
          selectionColor='#CFAAF9'
          autoCapitalize='sentences'
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
        />
    </View>
  )
})

export default AdressData;