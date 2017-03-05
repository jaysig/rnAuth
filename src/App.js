import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
// import config from 'config';
import config from '../config/default.json';
import { Header } from './components/common';
// const config = require('config');
// import config as s from '../config/default.json';
// import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class App extends Component {

  componentWillMount() {
    // const fbConfig = config.get('private.firebase');
    console.log(config.private.firebase);
    firebase.initializeApp(config.private.firebase);
  }
  render() {
    return (
      <View className="">
        <Header headerText="Authentication" />
        <Text>
        This is a feature
         </Text>
      </View>
    );
  }
}
// function mapStateToProps(state) {
//   return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, actions)(Header)

export default App;
