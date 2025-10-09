import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, Alert } from "react-native";

export default function Target() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const params = useLocalSearchParams<{ id?: string }>()
  const targetDatabase = useTargetDatabase()

  function handleSave() {
    if (!name.trim() || amount <= 0) {
      return Alert.alert('Atenção', 'Informe o nome e o valor da meta.');
    }
    setIsProcessing(true);

    if (params.id) {

    } else {
      create()
    }
  }

  async function create() {
    try {
      await targetDatabase.create({ name, amount })
      Alert.alert('Sucesso', 'Meta criada com sucesso.', [
        {
          text: 'Ok', onPress: () => router.back()
        }
      ]);
    } catch (error: any) {
      Alert.alert('Erro', 'Não foi possível criar a meta.');
      console.log(error)
      setIsProcessing(false);
    }
  }


  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira."
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
          value={name}
          onChangeText={setName}
        />
        <CurrencyInput
          label="Valor alvo (R$)"
          value={amount}
          onChangeValue={setAmount}
        />
        <Button title="Salvar" isProcessing={isProcessing} onPress={handleSave} />
      </View>
    </View >
  )
}