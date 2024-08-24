import { StyleSheet, View } from 'react-native'
import { Badge } from '../../atoms/Badge'
import { Typography } from '../../atoms/Typography'
import { blue, gray500, purple } from '../../../utils/globalStyle'

interface IHeaderToDoList {
  countCreated: number
  countCompleted: number
}

export function HeaderToDoList(props: IHeaderToDoList) {
  const { countCreated, countCompleted } = props

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
          <Typography text='Criadas' bold style={{ color: blue }} />
          <Badge value={countCreated} />
        </View>

        <View style={styles.containerResumer}>
          <Typography text='Concluídas' bold style={{ color: purple }} />
          <Badge value={countCompleted} />
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
