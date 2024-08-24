import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  blueDark,
  gray100,
  gray300,
  gray500,
  gray700,
} from '../../../utils/globalStyle'
import { IconPlus } from '../../../icons/plus'
import { useState } from 'react'

interface INewTaskProps {
  submitTask: (text: string) => void
}

export function NewTask(props: INewTaskProps) {
  const { submitTask } = props

  const [textInput, setTextInput] = useState<string>('')

  function handleButtonAddNewTask() {
    if (textInput === '') {
      return Alert.alert('Atenção', 'Escreva uma descrição para a tarefa')
    }

    submitTask(textInput)
    setTextInput('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={gray300}
        defaultValue={textInput}
        onChangeText={setTextInput}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonAddNewTask()}
      >
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
