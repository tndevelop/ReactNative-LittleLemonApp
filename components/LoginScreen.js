import { ScrollView, Text, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput placeholder={'email'} style={styles.input} value={email} onChangeText={setEmail} keyboardType={'email-address'}></TextInput>
      <TextInput placeholder={'password'} style={styles.input} value={password} onChangeText={setPassword} secureTextEntry={true}></TextInput>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input:{backgroundColor:'#EDEFEE', borderColor:'#EDEFEE', borderWidth:1, marginHorizontal:30, fontSize:25, marginTop:20 },
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});