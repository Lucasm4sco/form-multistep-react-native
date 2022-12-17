import { View, Text, TextInput} from "react-native"

const UserData = () => {
  return (
    <View>
        <Text>Nome: </Text>
        <TextInput 
          placeholder="Nome Completo"
        />
    </View>
  )
}

export default UserData;