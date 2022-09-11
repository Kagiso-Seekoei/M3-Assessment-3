import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Touchable, TouchableOpacity } from 'react-native';


export default function AllMarketsFeature() {


  return (
    <View style={styles.container}>
      <Text
           style={styles.title}>All Markets</Text>
      <Text style={styles.markets}>ADS -- 145.12</Text>
      <Text style={styles.markets}>AIG -- 55.05</Text>
      <Text style={styles.markets}>AMAZON -- 133.27</Text> 
      <Text style={styles.markets}>more..</Text>
      <TouchableOpacity
         style={styles.button} 
         underlayColor="#fff">
          <Text style={styles.buttonText}>buy stocks</Text>
         </TouchableOpacity>

      <Text style={styles.markets}>Nikkei -- 28417</Text>
      <Text style={styles.markets}>NASDAC -- 12587.80</Text>
      <Text style={styles.markets}>S&P 500 -- 4066.36</Text> 
      <Text style={styles.markets}>more..</Text>
      <TouchableOpacity
         style={styles.button} 
         underlayColor="#fff">
          <Text style={styles.buttonText}>buy indices</Text>
         </TouchableOpacity>


      <Text style={styles.markets}>Bitcoin -- 21210.50</Text>
      <Text style={styles.markets}>Etherium -- 1716.55</Text>
      <Text style={styles.markets}>Litcoin -- 63.055</Text>
      <Text style={styles.markets}>more..</Text>
      <TouchableOpacity
         style={styles.button} 
         underlayColor="#fff">
          <Text style={styles.buttonText}>buy crypto</Text>
         </TouchableOpacity>

      <Text style={styles.markets}>EUR/USD -- 1.00453</Text>
      <Text style={styles.markets}>GBP/USD -- 1.15865</Text>
      <Text style={styles.markets}>USD/JPY -- 142.596</Text>
      <Text style={styles.markets}>more..</Text>
      <TouchableOpacity
         style={styles.button} 
         underlayColor="#fff">
          <Text style={styles.buttonText}>buy forex</Text>
         </TouchableOpacity> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    fontSize: 10,
  },
  title: {
     color: "red",
     fontSize: 40,
     margin: 10
  },
  markets: {
    color: "black",
    fontSize: 10,
    margin: 5,
    marginLeft: 60
 },
  button: {
    borderRadius: 0,
    backgroundColor: "red",
    marginTop: 5,
    marginBottom: 10,
    padding: 5,
    width: "60%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13
  }

});