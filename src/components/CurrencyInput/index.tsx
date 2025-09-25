import { TextInputProps, View, Text } from "react-native"
import Input, { CurrencyInputProps } from 'react-native-currency-input'

import { styles } from "./styles"
import { colors } from "@/theme"

type Props = CurrencyInputProps & {
  label: string
  value: number
}

export function CurrencyInput({ label, value, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        value={value}
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        placeholderTextColor={colors.gray[500]}
        {...rest}
      />
    </View>
  )
}