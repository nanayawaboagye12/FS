import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Signin from './screens/signin';
import Signup from './screens/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as font from 'expo-font'
// Create the stack navigator
const Stack = createStackNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer>
      <StatusBar hidden={false} style="light" backgroundColor="black" />
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false,  headerStyle: { backgroundColor: 'black' }, // Set background color here
          headerTintColor: 'white', // Optional: Change text color to white for contrast
          
        }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: true,headerTitleStyle: {
            fontSize: 24, // Change the font size (you can adjust this value)
            fontWeight: 'bold', // Make the text bold
          },headerStyle: { backgroundColor: 'black' },headerTintColor: 'white'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
