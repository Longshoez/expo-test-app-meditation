import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmations-gallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery'

const Affirmations = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>
            Change your beliefs with affirmations
          </Text>
          <Text className='text-indigo-100 text-xl font-medium'>
            Start your meditation practice today
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data} />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View >
  )
}

export default Affirmations
