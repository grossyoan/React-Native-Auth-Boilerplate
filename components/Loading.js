// Loading.js
import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const Loading = (props) => {
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      props.navigation.navigate(user == null ? 'Signup' : 'Main');
    });
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
