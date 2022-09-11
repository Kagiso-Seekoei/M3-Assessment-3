import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Touchable, TouchableOpacity } from 'react-native';


export default function Dashboard() {

  return (
    <View style={styles.container}>
      <Text
           style={styles.title}>RedMarkets</Text>
      <Text
          style={styles.titleTrend}>Hot Stock of the Day: FACEBOOK at 169.14</Text>  
      <StatusBar style="auto" />


      <TouchableOpacity
         style={styles.button} 
         underlayColor="#fff">
          <Text style={styles.buttonText}>All Markets</Text>
         </TouchableOpacity>
      <TouchableOpacity
         style={styles.button} 
         underlayColor="#fff">
          <Text style={styles.buttonText}>Trade</Text>
         </TouchableOpacity>
      <TouchableOpacity
         style={styles.button} 
         underlayColor="#fff">
          <Text style={styles.buttonText}>Financial News</Text>
         </TouchableOpacity>

      <Text style={styles.titleLetter}>subscribe to our newsletter</Text>    

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
     margin: 10
  },
  titleTrend: {
    color: "black",
    fontSize: 15,
    margin: 20
 },
  button: {
    borderRadius: 10,
    backgroundColor: "red",
    margin: 10,
    padding: 10,
    width: "70%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25
  },
  titleLetter: {
     marginTop: 120,
  }

});






