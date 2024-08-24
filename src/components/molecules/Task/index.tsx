import Checkbox from 'expo-checkbox'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { IconTrash } from '../../../icons/trash'
import {
  blue,
  gray100,
  gray300,
  gray400,
  gray500,
  purpleDark,
} from '../../../utils/globalStyle'
import { Typography } from '../../atoms/Typography'

interface ITaskProps {
  text: string
  completed: boolean
  onChange: () => void
  removeTask?: () => void
}

export function Task(props: ITaskProps) {
  const { text, completed, onChange, removeTask } = props

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 20,
      padding: 18,
      alignItems: 'center',
      backgroundColor: completed ? gray500 : gray400,
      opacity: 10,
      borderRadius: 5,
      marginTop: 15,
    },

    containerCheckBoxText: {
      flexDirection: 'row',
      gap: 10,
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    textCheckbox: {
      textDecorationLine: completed ? 'line-through' : 'none',
      color: completed ? gray300 : gray100,
    },

    trashButton: {
      height: 20,
      width: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: -6,
    },
  })

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={onChange}
    >
      <View style={styles.containerCheckBoxText}>
        <Checkbox
          disabled={false}
          value={completed}
          focusable
          color={completed ? purpleDark : blue}
          style={{ borderRadius: 10 }}
          onValueChange={onChange}
        />

        <Typography text={text} style={styles.textCheckbox} />
      </View>

      <TouchableOpacity style={styles.trashButton} onPress={removeTask}>
        <IconTrash />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
