import React, {useState} from 'react'
import { View, KeyboardAvoidingView, ScrollView, Text, StyleSheet, Platform, Image, useColorScheme } from 'react-native';


const lightColor = '#EDEFEE'
const darkColor = '#333333'

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  const colorScheme = useColorScheme();
    {/*<KeyboardAvoidingView style={{ flex:0.82 }} {Platform.OS === 'ios'? 'padding' : 'position'}>*/}
  return (
        <ScrollView indicatorStyle={'white'} style={[styles.scroll, colorScheme === 'light'? {backgroundColor:lightColor} : {backgroundColor:darkColor}]} keyboardDismissMode='on-drag'>
            <View style={styles.imageAndCaption}>
                <Image style={styles.image}  source={require("../img/logo.png")} accessible={true} accessibilityLabel='little lemon logo' />
                <Text style={[styles.welcome, colorScheme === 'light'? {color:darkColor} : {color:lightColor}]}>Little Lemon </Text>
            </View>
            <Text style={[styles.text, colorScheme === 'light'? {color:darkColor} : {color:lightColor}]}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
            
        </ScrollView>
  );
}


const styles = StyleSheet.create({
    image:{height:100, width:100, borderRadius:20, resizeMode:'cover'},
    scroll: {
        display:'flex',
        flex:1
    },
    imageAndCaption:{margin: 10, justifyContent:'center',  flexDirection:'row'},
    welcome: {
        paddingTop:20,
        paddingBottom:40,
        paddingLeft:20,
        fontSize: 40,
        textAlign: 'center',
      },
    text:{paddingTop: 30, paddingBottom:40, fontSize:30, textAlign:'center', marginHorizontal:30, color:'#EDEFEE'},
    input:{backgroundColor:'#EDEFEE', borderColor:'#EDEFEE', borderWidth:1, marginHorizontal:30, fontSize:25, marginTop:20, marginBottom:150 }
})