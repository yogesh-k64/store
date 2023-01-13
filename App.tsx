import { NavigationContainer } from "@react-navigation/native"
import { Fragment } from "react"
import Welcome from "./src/screens/Welcome"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "./src/screens/LoginPage";
import { NativeBaseProvider } from "native-base";
import HomePage from "./src/screens/HomePage";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name='welcome' component={Welcome} />
          <Stack.Screen name='home' component={HomePage} />
          <Stack.Screen name='login' component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App