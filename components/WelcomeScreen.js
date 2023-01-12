import React, {useState} from 'react'
import { View, KeyboardAvoidingView, ScrollView, Text, StyleSheet, TextInput, Platform } from 'react-native';



export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  
    {/*<KeyboardAvoidingView style={{ flex:0.82 }} {Platform.OS === 'ios'? 'padding' : 'position'}>*/}
  return (
    <View  style={{ flex:0.82 }}>
        <ScrollView indicatorStyle={'white'} style={styles.scroll} keyboardDismissMode='on-drag'>
        <Text
            style={styles.welcome}>
            Welcome to Little Lemon
        </Text>
        <Text style={styles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <TextInput style={styles.input} onChangeText={onChangeFirstName} value={firstName} placeholder='First name'></TextInput>
        </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#333333'
    },
    welcome: {
        paddingTop: 40,
        paddingBottom:40,
        marginTop:10,
        fontSize: 40,
        color: '#EDEFEE',
        textAlign: 'center',

      },
    text:{paddingTop: 30, paddingBottom:40, fontSize:30, textAlign:'center', marginHorizontal:30, color:'#EDEFEE'},
    input:{backgroundColor:'#EDEFEE', borderColor:'#EDEFEE', borderWidth:1, marginHorizontal:30, fontSize:25, marginTop:20, marginBottom:150 }
})