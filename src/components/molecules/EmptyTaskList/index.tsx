import { View } from 'react-native'
import { IconClipboard } from '../../../icons/clipboard'
import { Typography } from '../../atoms/Typography'
import { gray300 } from '../../../utils/globalStyle'

export function EmptyTaskList() {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 50,
      }}
    >
      <IconClipboard />
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Typography
          text='Você ainda não tem tarefas cadastradas'
          bold
          style={{ color: gray300, fontSize: 16 }}
        />
        <Typography
          text='Crie tarefas e organize seus itens a fazer'
          style={{ color: gray300, fontSize: 14 }}
        />
      </View>
    </View>
  )
}
