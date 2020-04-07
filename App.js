import {createSwitchNavigator, createAppContainer} from 'react-navigation';

// import the different screens

import Loading from './components/Loading';

import Signup from './components/Signup';

import Login from './components/Login';

import Home from './components/Home';

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading,

      Signup,

      Login,

      Home,
    },

    {
      initialRouteName: 'Loading',
    },
  ),
);
