// SignUp.js
import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class SignUp extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch((error) => this.setState({errorMessage: error.message}));
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
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
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
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
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <View style={{flexDirection: 'row', marginTop: 8}}>
          <Text>Already have an account?</Text>
          <Text
            style={{color: 'blue', marginLeft: 5}}
            onPress={() => this.props.navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </View>
    );
  }
}
