import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Math({navigation}) {
return (
    <View style={styles.container}>
      <Text>Math Page</Text>
      <StatusBar style="auto" />
      <Button 
        title="Move to Home" 
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
