import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import beachImage from '@/assets/meditation-images/beach.webp'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'
import AppGradient from '@/components/AppGradient'
//component snipper rnfe -> arrow function component

export default function HomeScreen() {

  const router = useRouter()

  return (
    <View className='flex-1'>
      <ImageBackground
        source={beachImage}
        resizeMode='cover'
        className='flex-1'>

        <AppGradient colors={['rgba(0,0,0, 0.4)', 'rgba(0,0,0,0.8)']}>
          <SafeAreaView className='flex-1 px-1 justify-between' >
            <View>
              <Text className='text-center text-white font-bold text-4xl'>Helloww</Text>
              <Text className='text-center text-white text-regular text-2xl mt-3'>Simplifying Meditation for Everyone</Text>
            </View>
            <View>
              <CustomButton onPress={() => router.push('/affirmations')} title='start' />
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View >
  );
}
