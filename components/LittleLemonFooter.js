import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={styles.bg}>
      <Text
        style={styles.copyright}>
        All rights reserved by Little Lemon, 2023
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { backgroundColor: '#EE9972', position: 'absolute', bottom: 0, width:'100%' },
  copyright: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic'
  }
})