import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarListScreen from './ui/screens/CalendarListScreen';
import CalendarGridScreen from './ui/screens/CalendarGridScreen';
import NotesScreen from './ui/screens/NotesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
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

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="List" component={CalendarListScreen} />
        <Tab.Screen name="Grid" component={CalendarGridScreen} />
        <Tab.Screen name="Notes" component={NotesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}