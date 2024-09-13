import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import { TimerContext } from '@/context/TimeContext'

const AdjustMeditationDuration = () => {

  const { setDuration } = useContext(TimerContext)

  const handlePress = (duration: number) => {
    setDuration(duration)
    router.back()
  }

  return (
    <View className='flex-1 relative'>
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <View className='justify-center h-4/5'>
          <Text className='text-center font-bold text-3xl text-white mb-8'>Adjust your meditation duration</Text>
          <View>
            <CustomButton
              title='15 Minutes'
              containerStyles='mb-5'
              onPress={() => handlePress(15 * 60)}
            />
            <CustomButton
              title='5 Minutes'
              containerStyles='mb-5'
              onPress={() => handlePress(5 * 60)}
            />
            <CustomButton
              title='10 seconds'
              containerStyles='mb-5'
              onPress={() => handlePress(10)}
            />
          </View>
        </View>
        <View className='mb-5'>
          <CustomButton
            title='Cancel'
            onPress={() => router.back()}
          />
        </View>
      </AppGradient>
    </View>
  )
}

export default AdjustMeditationDuration 
