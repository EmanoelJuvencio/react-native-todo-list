import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import {
  blueDark,
  gray100,
  gray300,
  gray500,
  gray700,
} from '../../../utils/globalStyle'
import { IconPlus } from '../../../icons/plus'

export function NewTask(props: any) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={gray300}
      />

      <TouchableOpacity style={styles.button}>
        <IconPlus />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: -45,
    gap: 8,
  },

  input: {
    flex: 1,
    backgroundColor: gray500,
    borderRadius: 5,
    padding: 14,
    borderColor: gray700,
    borderWidth: 1,
    color: gray100,
  },

  button: {
    backgroundColor: blueDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    padding: 14,
  },
})
