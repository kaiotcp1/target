import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme";

type Props = TouchableOpacityProps & {
  title: string,
  isProcessing?: boolean
}

export function Button({ title, isProcessing = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.8}
      disabled={isProcessing}
      style={styles.container}
    >
      <Text style={styles.title}>
        {isProcessing ? (
          <ActivityIndicator
            size="small"
            color={colors.white}
          />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  )
}