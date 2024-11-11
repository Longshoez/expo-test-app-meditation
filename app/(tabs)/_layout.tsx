import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { Profile, Video, Shop, ShoppingCart, Notification } from 'iconsax-react-native';

const TabsLayout = () => {
  const iconSize = 24
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarStyle: {
        borderWidth: 1,
        borderRadius: 50,
      },
    }}
      sceneContainerStyle={{ backgroundColor: 'blue' }}
    >
      <Tabs.Screen
        name='nature-meditate'
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (<Profile color={color} size={iconSize} />),
        }}
      />
      <Tabs.Screen
        name='affirmations'
        options={{
          tabBarLabel: 'Notificaciones',
          tabBarBadge: 2,
          tabBarIcon: ({ color }) => (<Notification color={color} size={iconSize} />),
        }}
      />
      <Tabs.Screen
        name='affirmations2'
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (<Shop color={color} size={iconSize} />),
        }}
      />
      <Tabs.Screen
        name='affirmations3'
        options={{
          tabBarLabel: 'Lives',
          tabBarIcon: ({ color }) => (<Video color={color} size={iconSize} />),
        }}
      />
      <Tabs.Screen
        name='affirmations4'
        options={{
          tabBarLabel: 'Carrito',
          tabBarBadge: 4,
          tabBarIcon: ({ color }) => (<ShoppingCart color={color} size={iconSize} />)
        }}
      />

    </Tabs >
  )
}

export default TabsLayout
