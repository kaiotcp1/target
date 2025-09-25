import { Button } from "@/components/Button";
import { List } from "@/components/List";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { Transaction, TransactionProps } from "@/components/Transaction";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const details = {
  current: 'R$ 580,00',
  target: 'R$ 1.790,00',
  percentage: 25
}

const transaction: TransactionProps[] = [
  {
    id: '1',
    value: 'R$ 300,00',
    date: '12/04/25',
    description: 'CDB de 110% no banco XPTO',
    type: TransactionTypes.Input
  },
  {
    id: '2',
    value: 'R$ 3450,00',
    date: '12/04/25',
    description: 'CDB de 115% no banco XPTO',
    type: TransactionTypes.Output
  }
]

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>()
  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => { }
        }}
      />
      <Progress
        data={details}
      />
      <List
        title="Transações"
        data={transaction}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => { }} />)}
        emptyMessage="Não há transações cadastradas"
      />
      <View
        style={{ paddingBottom: 40 }}
      >
        <Button
          title="Nova transação"
          onPress={() => router.navigate(`/transaction/${params.id}`)}
        />
      </View>
    </View>
  )
}