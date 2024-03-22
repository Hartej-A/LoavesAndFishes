import { Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { Link } from 'expo-router';

import PageTest from './components/pageTest.js';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image style={styles.logo} source={require('./assets/Logo.png')} />

      <Text style={styles.otherText}>
        Worcester
      </Text>

    
      <Button style={styles.buttonS}
        title="Sign In"
        onPress={() => 
          alert('Sign in')
        }
      />

      <Button style={styles.buttonS}
        title="Create Account"
        onPress={() => 
          alert('Create Account')
        }
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(200, 200, 200)',
    padding: 8,
  },
  paragraph: {
    margin: 15,
    fontSize: 50,
    color: 'rgb(255, 0, 0)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  otherText: {
    fontSize: 30,
    color: 'rgb(0, 0, 255)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '50px'
  },
  buttonS: {
    marginTop: 15,
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 0, 200)',
    padding: 8,
  },
  buttonText: {
    fontSize: 20,
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
  },
  logo:{
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgb(220, 220, 220)',
    borderRadius: "100px",
    marginBottom: '25px',
    resizeMode: 'contain',
    width: '30%',
    height: '30%'
  }
});
