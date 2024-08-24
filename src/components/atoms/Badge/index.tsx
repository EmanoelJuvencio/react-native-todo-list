import { StyleSheet, Text, View } from 'react-native'
import {
  gray100,
  gray400,
  gray500,
  InterBold,
} from '../../../utils/globalStyle'

interface IBadgeProps {
  value: number
}

export function Badge({ value }: IBadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: gray400,
    borderWidth: 1,
    borderColor: gray500,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 10,
  },

  text: {
    color: gray100,
    fontFamily: InterBold,
  },
})
