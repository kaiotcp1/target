import { TextInputProps, View, Text, TextInput } from "react-native"
import { styles } from "./styles"
import { colors } from "@/theme"

type Props = TextInputProps & {
  label: string
}

export function Input({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        {...rest}
        placeholderTextColor={colors.gray[500]}
      />
    </View>
  )
}