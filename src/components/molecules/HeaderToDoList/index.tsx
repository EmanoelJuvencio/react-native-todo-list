import { StyleSheet, View } from 'react-native'
import { Badge } from '../../atoms/Badge'
import { Typography } from '../../atoms/Typography'
import { blue, gray500, purple } from '../../../utils/globalStyle'

export function HeaderToDoList() {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}
      >
        <View style={styles.containerResumer}>
          <Typography text='Criadas' bold color={blue} />
          <Badge value={0} />
        </View>

        <View style={styles.containerResumer}>
          <Typography text='Concluídas' bold color={purple} />
          <Badge value={0} />
        </View>
      </View>

      <View
        style={{ borderBottomWidth: 1, marginTop: 10, borderColor: gray500 }}
      />
    </>
  )
}

export const styles = StyleSheet.create({
  containerResumer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
})
