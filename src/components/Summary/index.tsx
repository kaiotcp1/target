import { ColorValue, Text, View } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons'
import React from "react"

export type SummaryProps = {
  label: string,
  value: string
}

type Props = {
  data: SummaryProps
  icon: {
    name: keyof typeof MaterialIcons.glyphMap
    color: ColorValue
  }
}

export function Summary({ data, icon }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name={icon.name} size={16} color={icon.color} />
        <Text style={styles.label}></Text>
      </View>
    </View>
  )
}