import { ScrollView, Text, StyleSheet, TextInput, Pressable, Button} from 'react-native';
import {useState} from 'react'

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logged, setLogged] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>

      {logged===false ? 
      <>
        
        <Text style={styles.regularText}>Login to continue </Text>
        <TextInput placeholder={'email'} style={styles.input} value={email} onChangeText={setEmail} keyboardType={'email-address'}></TextInput>
        <TextInput placeholder={'password'} style={styles.input} value={password} onChangeText={setPassword} secureTextEntry={true}></TextInput>
        <Pressable
        style={styles.loginButton}
          onPress={() => { navigation.navigate("Welcome")}}
        >
          <Text style={styles.buttonText}>Log in</Text>

        </Pressable>
      </>
      :
      <>
        <Text style={styles.regularText}>login successful!</Text>
      </>  
    }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginButton:{fontSize: 22,
    padding: 10,
    marginVertical: 20,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 1,
    borderRadius: 50},
    buttonText: {
      color: 'black',
      textAlign: 'center',
      fontSize: 25,
    },
    input:{backgroundColor:'white', borderColor:'white', borderWidth:1, marginHorizontal:30, fontSize:25, marginTop:20, color:'#EDEFEE' },
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
  },
});