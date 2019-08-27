import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return (
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile</Text>
      </View>
    );
  }
}