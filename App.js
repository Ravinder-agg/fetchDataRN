/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Reducer } from './src/State/reducer';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/Home';
import { Form } from './src/components/Form';
import { Content } from './src/components/Content';

import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  const store = createStore(Reducer,applyMiddleware(thunk));
  const StackNavigator = createNativeStackNavigator();
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <StackNavigator.Navigator initialRouteName = 'Home'>
          <StackNavigator.Screen name='Home' component={Home} options={{title:'Home'}}/>
          <StackNavigator.Screen name='Form' component={Form} options={{title:'Form'}}/>
        </StackNavigator.Navigator>
      </NavigationContainer>


    </Provider>
  )
}
export default App;
