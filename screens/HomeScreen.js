import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      <Text style={styles.text}>Click the button below for a surprise</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AboutScreen')}>
        <Text style={styles.button}>Check out this other screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'centered',
    backgroundColor: '#00ccee',
    padding: 8,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
});