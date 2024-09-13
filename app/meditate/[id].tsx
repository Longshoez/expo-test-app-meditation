import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import CustomButton from '@/components/CustomButton'
import { Audio } from 'expo-av'
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData'
import { TimerContext } from '@/context/TimeContext'

const Meditate = () => {

  const { id } = useLocalSearchParams()

  const { duration: secondsRemaining, setDuration: setSecondsRemaining } = useContext(TimerContext)

  // const [secondsRemaining, setSecondsRemaining] = useState(10)
  const [isMeditating, setIsMeditating] = useState(false)
  const [audioSound, setSound] = useState<Audio.Sound>()
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    //exit 
    if (secondsRemaining === 0) {
      setIsMeditating(false)
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1)
      }, 1000)
    }

    //whenever the component unmounts
    return () => {
      clearTimeout(timerId)
    }
  }, [secondsRemaining, isMeditating])

  useEffect(() => {
    return () => {
      setSecondsRemaining(10)
      audioSound?.unloadAsync()
    }
  }, [audioSound])


  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio
    const { sound } = await Audio.Sound.createAsync(
      AUDIO_FILES[audioFileName]
    )
    setSound(sound)
    return sound
  }

  const handleAdjustDuration = () => {
    if (isMeditating) toggleMeditationStatus()
    router.push('/(modal)/adjust-meditation-duration')
  }

  const togglePlayPause = async () => {
    const sound = audioSound ? audioSound : await initializeSound()
    const status = await sound?.getStatusAsync()
    if (status?.isLoaded) {
      await sound.playAsync()
      setIsPlayingAudio(true)
    } else {
      await sound.pauseAsync()
      setIsPlayingAudio(false)
    }
  }

  const toggleMeditationStatus = async () => {
    if (secondsRemaining === 0) setSecondsRemaining(10)
    setIsMeditating(!isMeditating)
    await togglePlayPause()
  }

  //format time for 2 digits 
  const formattedTimeMinutes = String(
    Math.floor(secondsRemaining / 60)
  ).padStart(2, '0')


  const formattedTimeSeconds = String(
    secondsRemaining % 60
  ).padStart(2, '0')

  return (
    <View className='flex-1'>
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={['#transparent', 'rgba(0,0,0,0.8)']}>
          <Pressable
            className='absolute top-16 left-5 z-10'
            onPress={() => router.back()}>
            <AntDesign name='left' size={25} color='white' />
          </Pressable>
          <View className='flex-1 justify-center'>
            <View className='mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'>
              <Text className='text-4xl text-blue-800 font-rmono'>
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>
          <View className='mb-5'>
            <CustomButton
              title='Adjust duration'
              onPress={handleAdjustDuration}
            />
            <CustomButton
              containerStyles='mt-4'
              title={isMeditating ? 'Stop' : 'Start'}
              onPress={toggleMeditationStatus}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate
