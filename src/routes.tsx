import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './screens/Home/Home';
import {Favorites} from './screens/Favorites/Favorites';
import {History} from './screens/History/History';

import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFF',
        tabBarStyle:{
          paddingBottom: 50,
          paddingTop: 5,
          backgroundColor: '#121212',
          borderTopColor: 'transparent',
          height: 90,
        },
      }}
    >
        <Tab.Screen
        name='Historico'
        component={History}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="clock" size={size} color={color} />
          )
        }}
        />

        <Tab.Screen
        name='Inicio'
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
        />
        
        <Tab.Screen
        name='Favoritos'
        component={Favorites}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="heart" size={size} color={color} />
          )
        }}/>
    </Tab.Navigator>
  );
}