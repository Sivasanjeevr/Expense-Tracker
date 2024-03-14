// navigation.jsx
import React, { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Screens/Individuals/HomePage';
import LoginPage from '../Screens/Individuals/LoginPage';
import RegisterPage from '../Screens/Individuals/RegisterPage';
import { AuthContext } from '../Context/AuthContext';
import SplashLoading from '../Screens/SplashLoading';
import LoginManagement from '../Screens/Managements/LoginManagement';
import RegisterManagement from '../Screens/Managements/RegisterManagement';
import DashBoardManagement from '../Screens/Managements/DashBoardManagement';
import LangingPage from '../Screens/LandingPage';
import AddExpenses from '../Screens/Individuals/AddExpenses';

const Stack = createStackNavigator();



export class Navigation extends Component {
  static contextType = AuthContext;
  render() {
    const { userInfo, splashLoading } = this.context;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {splashLoading ? (
            <Stack.Screen name="splash" component={SplashLoading} options={{ headerShown: false }} />
          ) : userInfo && userInfo.accessToken && (
            <Stack.Screen name="home" component={HomePage} options={{ headerShown: false }} />
          )}
          <Stack.Screen name='landing-page' component={LangingPage} options={{headerShown: false}} />
          <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="register" component={RegisterPage} options={{ headerShown: false }} />
          <Stack.Screen name="login-management" component={LoginManagement} options={{headerShown:false}} />
          <Stack.Screen name="register-management" component={RegisterManagement} options={{headerShown:false}} />
          <Stack.Screen name="dashboard-management" component={DashBoardManagement} options={{headerShown:false}} />
          <Stack.Screen name="add-expense" component={AddExpenses} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default Navigation;
