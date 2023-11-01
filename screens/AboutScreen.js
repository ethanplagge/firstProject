import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gotcha!</Text>
      <Text style={styles.subHeader}>
        Take a look at my favorite fruits displayed via array!
      </Text>
      <FlatList style={{flexGrow: 0}}
        data={[
          { key: 'oranges' },
          { key: 'apple' },
          { key: 'grape' },
          { key: 'banana' },
          { key: 'strawberry' },
          { key: 'pineapple' },
          { key: 'blueberry' },
          { key: 'raspberry' },
        ]}
        renderItem={({ item }) => (
          <Text style={styles.paragraph}>{item.key}</Text>
        )}></FlatList>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.text}>Go Back!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'centered',
    backgroundColor: '#ffffcc',
  },
  paragraph: {
    padding: 8,
    marginLeft: 10
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  subHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '15px',
    marginTop: 10,
    marginBottom: 10,
    padding: 5
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
});