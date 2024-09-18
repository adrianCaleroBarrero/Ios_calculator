import React from 'react';
import type {PropsWithChildren} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CalcualtorScreen from './src/presentation/screens/CalcualtorScreen';
import {globalStyles} from './src/config/theme/app-theme';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <View style={globalStyles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalcualtorScreen />
    </View>
  );
}

export default App;
