import { HomeHeader } from "../components/HomeHeader";
import { View } from "react-native";

const summary = {
  total: "R$ 2.680,00",
  input: { label: 'Entradas', value: 'R$ 6,184.99' },
  output: { label: 'Saidas', value: 'R$ 2,224.29' }
}

export default function Index() {
  return (
    <View style={{ flex: 1 }} >
      <HomeHeader data={summary} />
    </ View >

  )
}