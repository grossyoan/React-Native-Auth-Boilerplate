import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

export default (props) => {
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      props.navigation.navigate(user == null ? 'Signup' : 'Home');
    });
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
