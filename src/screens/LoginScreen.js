import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class LoginScreen extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then((user) =>{
      console.log('success',user);
      this.props.navigation.navigate('Home');
    })
    .catch((error) =>{
      console.log(error);
    });
    //() => {this.props.navigation.navigate('Home')}
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
});

export default LoginScreen;
