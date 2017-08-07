import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import Home from './components/Home/index';

export default class App extends Component {
  
  constructor(){
    super();
  }


  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
