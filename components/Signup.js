// SignUp.js
import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const Signup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => props.navigation.navigate('Home'))
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Sign Up</Text>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={{
          height: 40,
          width: '90%',
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 8,
        }}
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={{
          height: 40,
          width: '90%',
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 8,
          marginBottom: 16,
        }}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Button title="Sign Up" onPress={Signup} />
      <View style={{flexDirection: 'row', marginTop: 8}}>
        <Text>Already have an account?</Text>
        <Text
          style={{color: 'blue', marginLeft: 5}}
          onPress={() => props.navigation.navigate('Login')}>
          Login
        </Text>
      </View>
    </View>
  );
};
