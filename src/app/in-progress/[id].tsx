import { Button, Text, View } from "react-native";
import { router } from "expo-router";

export default function InProgress() {

  return (
    <View>
      <Text>Em progresso</Text>
      <Button title="Voltar" onPress={() => router.back()} />"
    </View>
  )
}