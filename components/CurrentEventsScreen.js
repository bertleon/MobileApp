import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class CurrentEventScreen extends Component {
  static navigationOptions = {
    title: 'Events',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Events</Text>
      </View>
    );
  }
}