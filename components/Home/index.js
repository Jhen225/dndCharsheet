import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';
import Item from './item';
export default class Home extends React.Component {
  
  constructor(){
    super();

  }

  openCharacter(character){

  }

  render() {
    return (
      <FlatList 
        data={}
        renderItem={(item) => {
          <Item item={item} openCharacter={this.openCharacter.bind(this)}/>
        }}
      />
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

