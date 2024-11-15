import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { useEffect } from "react";
import TimerProvider from "@/context/TimeContext";
import { SafeAreaView } from "react-native-safe-area-context";
//this prevents the splascheen from autohiding until we want it to load
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

  const [fontsLoaded, error] = useFonts({
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded) return null
  if (!fontsLoaded && !error) return null

  return (
    <TimerProvider>
      <StatusBar style='light' />
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='meditate/[id]' options={{ headerShown: false }} />
        <Stack.Screen name='(modal)/adjust-meditation-duration' options={{ headerShown: false, presentation: 'modal' }} />
      </Stack>
    </TimerProvider>
  );
}

