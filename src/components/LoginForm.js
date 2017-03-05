import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class LoginForm extends Component {

  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection >
          <TextInput
            value={this.state.text}
            style={{ height: 20, width: 100 }}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>
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
