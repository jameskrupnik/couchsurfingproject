import React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/Profile';
import PostsScreen from './src/screens/Posts';
import PostScreen from './src/screens/Post';
import { StackNavigatorParamList } from './src/types/index';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
