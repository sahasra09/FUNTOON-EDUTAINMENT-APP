import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import HomeScreen from './screens/HomeScreen';
import FactsScreen from './screens/FactsScreen'
import HobbiesScreen from './screens/HobbiesScreen'
import RiddlesScreen from './screens/RiddlesScreen'
import StoriesScreen from './screens/StoriesScreen'
import StoryScreen from './screens/StoryScreen'
import HobbyScreen from './screens/HobbyScreen'
const Stack=createStackNavigator()


export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Facts" component={FactsScreen}/>
          <Stack.Screen name="Hobbies" component={HobbiesScreen}/>
          <Stack.Screen name="HobbyScreen" component={HobbyScreen}/>
          <Stack.Screen name="Riddles" component={RiddlesScreen}/>
          <Stack.Screen name="Stories" component={StoriesScreen}/>
          <Stack.Screen name="StoryScreen" component={StoryScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
