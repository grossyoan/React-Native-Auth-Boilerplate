import React from 'react';

import {StyleSheet, Platform, Image, Text, View} from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

// import the different screens

import Loading from './components/Loading';

import Signup from './components/Signup';

import Login from './components/Login';

import Main from './components/Main';

// create our app’s navigation stack

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading,

      Signup,

      Login,

      Main,
    },

    {
      initialRouteName: 'Loading',
    },
  ),
);
