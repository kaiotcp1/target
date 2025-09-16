import { colors } from '../theme/colors'
import { Stack } from 'expo-router'
import {
  useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold
} from '@expo-google-fonts/inter'
import { Loading } from '../components/Loading'

export default function Layout() {
  const [fonstLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  if (!fonstLoaded) {
    return <Loading />
  }

  return <Stack
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: colors.white }
    }}
  />
}