import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class PastEventsScreen extends Component {
  static navigationOptions = {
    title: 'Past Events',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Past Events</Text>
      </View>
    );
  }
}