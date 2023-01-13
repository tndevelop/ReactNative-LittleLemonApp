import React, {useState} from 'react'
import { View, KeyboardAvoidingView, ScrollView, Text, StyleSheet, Platform, Image, useColorScheme, Pressable } from 'react-native';


const lightColor = '#EDEFEE'
const darkColor = '#333333'

export default function WelcomeScreen({navigation}) {
  const [firstName, onChangeFirstName] = useState('');
  const colorScheme = useColorScheme();
    {/*<KeyboardAvoidingView style={{ flex:0.82 }} {Platform.OS === 'ios'? 'padding' : 'position'}>*/}
  return (
        <ScrollView indicatorStyle={'white'} style={[styles.scroll]} keyboardDismissMode='on-drag'>
            <View style={styles.imageAndCaption}>
                <Image style={styles.image}  source={require("../img/logo.png")} accessible={true} accessibilityLabel='little lemon logo' />
                <Text style={[styles.welcome, colorScheme === 'light'? {color:darkColor} : {color:lightColor}]}>Little Lemon </Text>
            </View>
            <Text style={[styles.text, colorScheme === 'light'? {color:darkColor} : {color:lightColor}]}>
            Little Lemon, your local mediterranean Bistro
            </Text>
            <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Menu")}>
                <Text style={[styles.buttonText]}>Menu</Text>
            </Pressable>
            <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Subscribe")}>
                <Text style={styles.buttonText}>Newsletter</Text>
            </Pressable>
            
        </ScrollView>
  );
}


const styles = StyleSheet.create({
    
    loginButton:{ fontSize: 22, padding: 10, marginVertical: 20, margin: 100, backgroundColor: '#EE9972', borderColor: '#EE9972', borderWidth: 1, borderRadius: 50 },
    buttonText: {
      color: 'black',   textAlign: 'center',   fontSize: 25,
    },
    image:{height:100, width:100, borderRadius:20, resizeMode:'cover'},
    scroll: {
        display:'flex',     flex:1
    },
    imageAndCaption:{margin: 10, justifyContent:'center',  flexDirection:'row'},
    welcome: {
        paddingTop:20,     paddingBottom:40,     paddingLeft:20,     fontSize: 40,     textAlign: 'center',
      },
    text:{paddingTop: 30, paddingBottom:40, fontSize:30, textAlign:'center', marginHorizontal:30, color:'#EDEFEE'},
    input:{backgroundColor:'#EDEFEE', borderColor:'#EDEFEE', borderWidth:1, marginHorizontal:30, fontSize:25, marginTop:20, marginBottom:150 }
})