import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import Menu from './components/Menu';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';


export default function App() {
  return (
    <>
    {/*
      <View style={styles.container}>
        <LittleLemonHeader />
        <LoginScreen />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
  */}    
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
      <WelcomeScreen/>
      <LittleLemonFooter />
    </View>
  
    </>
    
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  }

})