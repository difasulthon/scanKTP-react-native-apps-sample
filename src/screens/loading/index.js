import React, { Component } from 'react';
import { Container, Content, Spinner } from 'native-base';
// import firebase from 'react-native-firebase';
import colors from '../../assets/colors';
class LoadingScreen extends Component {
  // check if user is already logged in
  componentDidMount() {
    this.props.navigation.navigate('Welcome')
  }

  render() {
    return (
      <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Spinner color={colors.primaryColor} />
      </Container>
    );
  }
}

export default LoadingScreen;
