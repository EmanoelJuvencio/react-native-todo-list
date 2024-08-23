import { View } from 'react-native'
import { StyleSheet } from 'react-native'

import { NewTask } from '../../molecules/NewTask'
import { HeaderToDoList } from '../../molecules/HeaderToDoList'

export function Content() {
  return (
    <View style={styles.container}>
      <NewTask />
      <HeaderToDoList />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  containerResumer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
})
