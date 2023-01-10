import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.bg}>
      <Text
        style={styles.text}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 0.15, backgroundColor: '#EE9972' }
  , text: {
    paddingTop: 40,
    paddingBottom:10,
    marginTop:10,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    
  }

})