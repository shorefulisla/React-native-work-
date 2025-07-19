import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import ContactUsScreen from '../Screens/ContactUsScreen/ContactUsScreen';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile-main" component={ProfileScreen} />
      <Stack.Screen name="contact-us" component={ContactUsScreen} />
    </Stack.Navigator>
  );
}
