import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
// import config from 'config';
import config from '../config/default.json';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
// const config = require('config');
// import config as s from '../config/default.json';
// import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    // const fbConfig = config.get('private.firebase');
    firebase.initializeApp(config.private.firebase);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (<CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>);
      case false:
        return <LoginForm />;
      default:
        // return <CardSection><Spinner /></CardSection>;
        return (
        <View
          style={{
            alignSelf: 'center'
          }}
        >
          <Spinner />
        </View>);
    }
  }
  render() {
    return (
      <View className="">
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
// function mapStateToProps(state) {
//   return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, actions)(Header)

export default App;
