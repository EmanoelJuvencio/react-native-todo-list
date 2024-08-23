import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import {
  gray100,
  gray300,
  gray400,
  gray500,
  InterBold,
} from '../../../utils/globalStyle'

import { NewTask } from '../NewTask'
import { Badge } from '../../atoms/Badge'

export function Content() {
  return (
    <View style={styles.container}>
      <NewTask />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <View style={styles.containerResumer}>
          <Text style={styles.text}>Criadas</Text>
          <Badge value={0} />
        </View>

        <View style={styles.containerResumer}>
          <Text style={styles.text}>Concluidas</Text>
          <Badge value={0} />
        </View>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  text: {
    color: gray100,
  },

  containerResumer: { flexDirection: 'row', gap: 4 },
})
