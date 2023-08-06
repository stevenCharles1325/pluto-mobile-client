import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {AuthContext} from '../components/AuthenticationProvider';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const {status} = useContext(AuthContext);
  const {isAuthenticated} = status;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
        contentStyle: {backgroundColor: 'transparent'},
      }}>
      {/* AUTHENTICATED ONLY */}
      {isAuthenticated ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{navigationBarHidden: true}}
        />
      ) : (
        <>
          {/* UNAUTHENTICATED ONLY */}
          <Stack.Screen name="Sign-in" component={SignIn} />
          <Stack.Screen name="Sign-up" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}
