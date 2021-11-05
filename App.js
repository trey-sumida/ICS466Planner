import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarListScreen from './ui/screens/CalendarListScreen';
import CalendarGridScreen from './ui/screens/CalendarGridScreen';
import NotesNavigationScreen from './ui/screens/NotesNavigationScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="List"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'List') {
            iconName = 'list-outline';
          } else if (route.name === 'Grid') {
            iconName = 'grid-outline';
          } else if (route.name === 'Notes') {
            iconName = 'pencil-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
      })
    }
    > 
        <Tab.Screen name="List" component={CalendarListScreen} />
        <Tab.Screen name="Grid" component={CalendarGridScreen} />
        <Tab.Screen name="Notes" component={NotesNavigationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}