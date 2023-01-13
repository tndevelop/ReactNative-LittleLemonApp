import React, {useState} from 'react'
import { View, Alert, KeyboardAvoidingView, ScrollView, ValidateEmail, Text, TextInput, StyleSheet, Platform, Image, useColorScheme, Pressable } from 'react-native';
//import { ValidateEmail } from '../utils';

const lightColor = '#EDEFEE'
const darkColor = '#333333'



export default function SubscribeScreen({navigation}) {
  const [firstName, onChangeFirstName] = useState('');
  const [email, setEmail] = useState('')
  const colorScheme = useColorScheme();
  const subscribe = () => {
        Alert.alert("Thanks for subscribing your email " + email + " , stay tuned!"  )
        setEmail("")
    }
    {/*<KeyboardAvoidingView style={{ flex:0.82 }} {Platform.OS === 'ios'? 'padding' : 'position'}>*/}
  return (
        <ScrollView indicatorStyle={'white'} style={[styles.scroll, colorScheme === 'light'? {backgroundColor:lightColor} : {backgroundColor:darkColor}]} keyboardDismissMode='on-drag'>
            <View style={styles.imageAndCaption}>
                <Image style={styles.image}  source={require("../img/logo.png")} accessible={true} accessibilityLabel='little lemon logo' />
                <Text style={[styles.welcome, colorScheme === 'light'? {color:darkColor} : {color:lightColor}]}>Little Lemon </Text>
            </View>

            <TextInput placeholder={'email'} style={styles.input} value={email} onChangeText={setEmail} keyboardType={'email-address'}></TextInput>
            <Pressable style={styles.loginButton} onPress={() => subscribe()}>
                <Text style={styles.buttonText}>Subscribe</Text>
            </Pressable>
        </ScrollView>
  );
}


const styles = StyleSheet.create({
    input:{backgroundColor:'white', borderColor:'white', borderWidth:1, marginHorizontal:30, fontSize:25, marginTop:20, color:'#EDEFEE' },
    loginButton:{fontSize: 22, padding: 10, marginVertical: 20, margin: 100, backgroundColor: '#EE9972', borderColor: '#EE9972', borderWidth: 1, borderRadius: 50 },
    buttonText: { color: 'black', textAlign: 'center', fontSize: 25, },
    image:{height:100, width:100, borderRadius:20, resizeMode:'cover'},
    scroll: { display:'flex', flex:1  },
    imageAndCaption:{margin: 10, justifyContent:'center',  flexDirection:'row'},
    welcome: { paddingTop:20, paddingBottom:40, paddingLeft:20, fontSize: 40, textAlign: 'center', },
    
})