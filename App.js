import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import CurrentEventsScreen from './components/CurrentEventsScreen';
import PastEventsScreen from './components/PastEventsScreen';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';


const TabNavigator = createBottomTabNavigator({
  Events: CurrentEventsScreen,
  PastEvents: PastEventsScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);








// const RootStack = createStackNavigator(
//   {
//     CurrentEvents: CurrentEventsScreen,
//     PastEvents: PastEventsScreen,
//     Profile: ProfileScreen,
//     Settings: SettingsScreen,
//   },
//   {
//     initialRouteName: 'CurrentEvents',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#777777',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   },
// );

// const RootContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <RootContainer />;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





