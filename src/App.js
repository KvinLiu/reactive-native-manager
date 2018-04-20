import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import firebaseconfig from './firebase_config.json';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseconfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
