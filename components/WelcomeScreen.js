import { View, ScrollView, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex:0.78 }}>
    <ScrollView indicatorStyle={'white'} style={styles.scroll} >
      <Text
        style={styles.welcome}>
        Welcome to Little Lemon
      </Text>
      <Text style={styles.text}>
      Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
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
        paddingBottom:10,
        marginTop:10,
        fontSize: 55,
        color: '#EDEFEE',
        textAlign: 'center',
        
      },
    text:{paddingTop: 30, fontSize:40, textAlign:'center', marginHorizontal:30, color:'#EDEFEE'}
})