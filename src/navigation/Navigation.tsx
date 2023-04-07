import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screen } from '@app/constants';
import { AuthStack, MainStack } from './';
import { connect } from 'react-redux';
import { Dispatch, RootState } from '@app/store';
import { navigationRef } from '@app/helpers';
import { BaseNotificationModal } from '@app/components';
const Stack = createNativeStackNavigator();
interface Props {}
type StateProps = ReturnType<typeof mapState>;
const NavigationComponent = (props: Props & StateProps): JSX.Element => {
  const { authState } = props;
  const { isSignedIn } = authState;
  return (
    <>
      <BaseNotificationModal />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isSignedIn ? (
            <>
              <Stack.Screen name={screen.AUTH_STACK} component={AuthStack} />
            </>
          ) : (
            <>
              <Stack.Screen name={screen.MAIN_STACK} component={MainStack} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const mapState = (rootState: RootState) => ({
  authState: rootState.authModel,
});

const mapDispatch = (_rootReducer: Dispatch) => ({});

const Navigation = connect(mapState, mapDispatch)(NavigationComponent);

export { Navigation };
