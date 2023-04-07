import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screen } from '@app/constants';
import { AuthHomeScreen, LoginScreen } from '@app/screens';
const Stack = createNativeStackNavigator();
export const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screen.AUTH_HOME} component={AuthHomeScreen} />
      <Stack.Screen name={screen.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};
