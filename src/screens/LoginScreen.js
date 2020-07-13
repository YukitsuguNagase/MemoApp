import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';
import CircleButton from '../elements/CircleButton';

class LoginScreen extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then(() =>{
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' })
        ],
      });
      this.props.navigation.dispatch(resetAction);
    })
    .catch(() =>{
    });
    //() => {this.props.navigation.navigate('Home')}
  }

  handlePress() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Login
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text });}}
          autoCapitalize="none"
          autoCoect= {false}
          placeholder="Email Address"
           />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text });}}
          autoCapitalize="none"
          autoCoect= {false}
          placeholder="Password"
          secureTextEntry
           />
        <TouchableHighlight style={styles.button}onPress={this.handleSubmit.bind(this)} underlayColor="#c70f66">
          <Text style={styles.buttonTitle}>Send</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.signUp} onPress={this.handlePress.bind(this)}>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
  },

  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },

  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },

  button: {
    backgroundColor: '#e31676',
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },

  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },

  signUp: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signUpText: {
    fontSize: 16,
  },
});

export default LoginScreen;
