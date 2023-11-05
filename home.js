import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({navigation}) {
return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <StatusBar style="auto" />
      <Button 
        title="Move to Login" 
        onPress={() => navigation.navigate('Login')}
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
