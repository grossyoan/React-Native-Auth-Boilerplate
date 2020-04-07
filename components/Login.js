// Login.js
import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
export default class Login extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin = () => {
    const {email, password} = this.state;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch((error) => this.setState({errorMessage: error.message}));
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Login</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
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
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
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
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <View style={{flexDirection: 'row', marginTop: 8}}>
          <Text>Don't have an account?</Text>
          <Text
            style={{color: 'blue', marginLeft: 5}}
            onPress={() => this.props.navigation.navigate('Signup')}>
            Sign up
          </Text>
        </View>
      </View>
    );
  }
}
