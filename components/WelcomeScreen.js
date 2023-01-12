import React, {useState} from 'react'
import { View, KeyboardAvoidingView, ScrollView, Text, StyleSheet, Platform, Image } from 'react-native';



export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  
    {/*<KeyboardAvoidingView style={{ flex:0.82 }} {Platform.OS === 'ios'? 'padding' : 'position'}>*/}
  return (
        <ScrollView indicatorStyle={'white'} style={styles.scroll} keyboardDismissMode='on-drag'>
            <View style={styles.imageAndCaption}>
                <Image style={styles.image}  source={require("../img/logo.png")} accessible={true} accessibilityLabel='little lemon logo' />
                <Text style={styles.welcome}>Little Lemon</Text>
            </View>
            <Text style={styles.text}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
            
        </ScrollView>
  );
}


const styles = StyleSheet.create({
    image:{height:100, width:100, borderRadius:20, resizeMode:'cover'},
    scroll: {
        backgroundColor: '#333333',
        display:'flex',
        flex:1
    },
    
    imageAndCaption:{margin: 10, justifyContent:'center',  flexDirection:'row'},

    welcome: {
        paddingTop:20,
        paddingBottom:40,
        paddingLeft:20,
        fontSize: 40,
        color: '#EDEFEE',
        textAlign: 'center',

      },
    text:{paddingTop: 30, paddingBottom:40, fontSize:30, textAlign:'center', marginHorizontal:30, color:'#EDEFEE'},
    input:{backgroundColor:'#EDEFEE', borderColor:'#EDEFEE', borderWidth:1, marginHorizontal:30, fontSize:25, marginTop:20, marginBottom:150 }
})