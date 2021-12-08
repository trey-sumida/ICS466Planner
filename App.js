import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CalendarListNavigationScreen from './ui/screens/calendar-list/CalendarListNavigationScreen';
import NotesNavigationScreen from './ui/screens/notes/NotesNavigationScreen';
import SplashScreen from './ui/screens/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  const mainTabsNavigation = () => {
    return <Tab.Navigator
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
        <Tab.Screen name="Notes" component={NotesNavigationScreen} />
      </Tab.Navigator>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splashScreen" component={SplashScreen}/>
        <Stack.Screen name="mainTabs" component={mainTabsNavigation}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}