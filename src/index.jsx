// In App.js in a new project

import * as React from 'react';
import {View} from 'react-native';
import Navigation from './routes'

export default function App() {
  return (
        <View style={{flex: 1}}>
            <Navigation/>
        </View>
  );
}