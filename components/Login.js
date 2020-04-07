// Login.js
import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const Login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => props.navigation.navigate('Home'))
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Login</Text>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <TextInput
        style={{
          height: 40,
          width: '90%',
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 8,
        }}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={{
          height: 40,
          width: '90%',
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 8,
          marginBottom: 16,
        }}
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={(value) => setPassword(value)}
        value={password}
      />
      <Button title="Login" onPress={Login} />
      <View style={{flexDirection: 'row', marginTop: 8}}>
        <Text>Don't have an account?</Text>
        <Text
          style={{color: 'blue', marginLeft: 5}}
          onPress={() => props.navigation.navigate('Signup')}>
          Sign up
        </Text>
      </View>
    </View>
  );
};
