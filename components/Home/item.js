import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const Item = () => {
    return (
        <TouchableOpacity
            onPress={this.props.openCharacter(this.props.item)}
            
            >
            <View><Text>this.props.item.name</Text></View>
        </TouchableOpacity>
    );
}

export default Item;