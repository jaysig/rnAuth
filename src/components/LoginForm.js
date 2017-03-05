import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from './common';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class LoginForm extends Component {

  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />

        <CardSection >
          <Button>
            Log In
          </Button>
        </CardSection>
        {/* <Text>This is a feature</Text> */}
      </Card>
    );
  }
}
// function mapStateToProps(state) {
//  return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, actions)(Header)
export default LoginForm;
