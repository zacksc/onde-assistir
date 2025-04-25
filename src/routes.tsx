import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './screens/Home/Home';
import {Favorites} from './screens/Favorites/Favorites';
import {History} from './screens/History/History';

import { Entypo, Feather } from '@expo/vector-icons';
import { Search } from './screens/Search/Search';
import { Details } from './screens/Details/Details';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStackGroup(){

  return(
    <Stack.Navigator>
      <Stack.Screen name='Início' component={Home}/>
      <Stack.Screen name='Busca' component={Search}/>
      <Stack.Screen name='Details' component={Details}/>
    </Stack.Navigator>
  )
}

function HistoryStackGroup(){

  return(
    <Stack.Navigator>
      <Stack.Screen name='Histórico' component={History}/>
      <Stack.Screen name='Detalhes' component={Details}/>
    </Stack.Navigator>
  )
}

function FavoritesStackGroup(){

  return(
    <Stack.Navigator>
      <Stack.Screen name='Favoritos' component={Favorites}/>
      <Stack.Screen name='Detalhes' component={Details}/>
    </Stack.Navigator>
  )
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown : false,
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
        component={HistoryStackGroup}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="clock" size={size} color={color} />
          )
        }}
        />

        <Tab.Screen
        name='Inicio'
        component={HomeStackGroup}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
        />
        
        <Tab.Screen
        name='Favoritos'
        component={FavoritesStackGroup}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name="heart" size={size} color={color} />
          )
        }}/>
    </Tab.Navigator>
  )
}


export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainTabs' component={MainTabNavigator} options={{headerShown : false}}/>
    </Stack.Navigator>
  );
}