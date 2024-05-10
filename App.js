import Home from './App/Pages/Home/Home';
import Login from './App/Pages/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Courses from './App/Pages/Courses/Courses';
import { PaperProvider } from 'react-native-paper';

const Stack =  createStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Courses" component={Courses} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

