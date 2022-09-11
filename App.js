import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Touchable, TouchableOpacity } from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>
      <Text
           style={styles.title}>Hello Kagiso!</Text>
      <Text
          style={styles.title}>Login</Text>  
      <StatusBar style="auto" />

      <TextInput
         placeholder="Enter username"
         style={styles.input} />

      <TextInput
         placeholder="Enter password"
         keyboardType="visible-password"
         style={styles.input} />

      <TouchableOpacity
         style={styles.loginButton} 
         underlayColor="#fff">
          <Text style={styles.loginText}>Login</Text>
         </TouchableOpacity>

      <Text
          style={styles.titleRegister}>new here? register</Text>    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 10,
  },
  title: {
     color: "red",
     fontSize: 40,
     margin: 20
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    width: "80%",
    marginTop: 20,
    color: "red",
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  loginButton: {
    borderRadius: 10,
    backgroundColor: "red",
    margin: 80,
    padding: 5
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25
  },
  titleRegister: {
    color: "red",
    fontSize: 20,
    margin: 20
 }
});