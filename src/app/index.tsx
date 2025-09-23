import { Target } from "@/components/Target";
import { HomeHeader } from "../components/HomeHeader";
import { View } from "react-native";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { router } from "expo-router";
import {
  StatusBar,
} from 'react-native';

const summary = {
  total: "R$ 2.680,00",
  input: { label: 'Entradas', value: 'R$ 6,184.99' },
  output: { label: 'Saidas', value: 'R$ 2,224.29' }
}

const targets = [
  {
    id: '1',
    name: 'Apple Watch',
    percentage: '75%',
    current: '900,00',
    target: '1.200,00'
  },
  {
    id: '2',
    name: 'Comprar uma cadeira ergonomica',
    percentage: '75%',
    current: '900,00',
    target: '1.200,00'
  },
  {
    id: '3',
    name: 'TV oled 49',
    percentage: '75%',
    current: '900,00',
    target: '1.200,00'
  }
]

export default function Index() {
  return (
    <View style={{ flex: 1 }} >
      <StatusBar barStyle="light-content" />
      <HomeHeader data={summary} />
      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item}
          onPress={() => router.navigate(`/in-progress/${item.id}`)}
        />
        }
        emptyMessage='Nenhuma meta cadastrada'
        containerStyle={{ paddingHorizontal: 24 }}
      />
      <View style={{ padding: 24, paddingBottom: 32, marginBottom: 32 }}>
        <Button title="Nova Meta" onPress={() => router.navigate('/target')} />
      </View>
    </ View >

  )
}