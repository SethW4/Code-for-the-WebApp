import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, SafeAreaView , TouchableOpacity} from 'react-native';
const { ExpectedPassword } = require('./config.json');

export default function Login() {
  const [Password, onPasswordChange] = useState('Answer pls');

  const handleButtonPress = () => {
    if (Password === ExpectedPassword) {
      // Password is correct
      Alert.alert('Success', 'Password is correct!');
    } else {
      // Password is incorrect
      Alert.alert('Error', 'Password is incorrect!');
    }
  };

  return (
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.input}
          onChangeText={onPasswordChange}

          placeholder="Enter password"
        />
        <TouchableOpacity style={styles.button}>
          <Button
            title="Submit"
            onPress={handleButtonPress}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    //use comment, theres no bugs finally on this file
    input: {
      padding: 10,
      height: 70,
      width: 200,
      textAlign: 'center',
      borderWidth:1,
      borderColor: "black",
    },
    button:{
      margin: 10,
      padding: 10,
      backgroundColor: "lightblue",
      width: 150,
      height: 70,
      borderWidth:1,
      justifyContent: 'center',
      borderRadius:20
    }
})