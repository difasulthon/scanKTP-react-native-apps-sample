/**
 * Fitt-g App
 */
import React from 'react';
import { Provider } from 'react-redux';
import { RoutesNavigator } from './routes';
import ConfigStore from './ConfigStore';
import { NavigationContainer } from '@react-navigation/native';

const store = ConfigStore();

export default function App() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RoutesNavigator />
      </NavigationContainer>
    </Provider>
  );
}
