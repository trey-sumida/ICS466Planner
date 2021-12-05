import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarListNavigationScreen from './ui/screens/calendar-list/CalendarListNavigationScreen';
import CalendarGridNavigationScreen from './ui/screens/calendar-grid/CalendarGridNavigationScreen';
import NotesNavigationScreen from './ui/screens/notes/NotesNavigationScreen';

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
        headerShown: false,
      })
    }
    > 
        <Tab.Screen name="List" component={CalendarListNavigationScreen} />
        <Tab.Screen name="Grid" component={CalendarGridNavigationScreen} />
        <Tab.Screen name="Notes" component={NotesNavigationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}