import { Text, View, StyleSheet, Image } from 'react-native';

export default function PageTest() {
  return (
    <View style={styles.container}>
      <Text>This is the Way</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,0,0)'
  },
});
