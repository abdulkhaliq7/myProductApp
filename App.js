import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddProductScreen from './screens/AddProductScreen';
import UpdateProductScreen from './screens/UpdateProductScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import dashboardScreen from './screens/dashboardScreen';
// import BarcodeScannerScreen from './screens/BarcodeScannerScreen';


const Stack = createStackNavigator();

const globalScreenOptions ={
  headerStyle: { backgroundColor: "#2C6BED"},
  headerTitleStyle: {color: "white"},
  headerTintColor:  "white",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={globalScreenOptions}>
      {/* <Stack.Screen name='Scanner' component={BarcodeScannerScreen} /> */}
        <Stack.Screen  name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='AddProduct' component={AddProductScreen} />
        <Stack.Screen name='UpdateProduct' component={UpdateProductScreen} />
        <Stack.Screen name='UpdateProfile' component={UpdateProfileScreen} />
        <Stack.Screen name='dashboard' component={dashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
