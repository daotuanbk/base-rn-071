import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screen } from '@app/constants';
import { TestScreen } from '@app/screens';
const Stack = createNativeStackNavigator();
export const MainStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.TEST} component={TestScreen} />
    </Stack.Navigator>
  );
};
