// Main.js
import React from 'react';
import {StyleSheet, Platform, Image, Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
export default class Main extends React.Component {
  handleSignout = () => {
    auth().signOut();
  };
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = auth();
    this.setState({currentUser});
  }
  render() {
    const {currentUser} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
        <Button title="Disconnect" onPress={this.handleSignout} />
      </View>
    );
  }
}
