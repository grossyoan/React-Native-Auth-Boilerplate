// Main.js
import React from 'react';
import {Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
export default () => {
  const handleSignout = () => {
    auth().signOut();
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, marginBottom: 16}}>Welcome back sir!</Text>
      <Button title="Disconnect" onPress={handleSignout} />
    </View>
  );
};
