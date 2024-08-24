import { StyleSheet, View } from 'react-native'
import { blueDark, gray500 } from '../../../utils/globalStyle'

interface IProgressBar {
  progress: number
}

export function ProgressBar({ progress }: IProgressBar) {
  return (
    <View style={styles(progress).containerProgressBar}>
      <View style={styles(progress).backgroundProgressBar} />
      <View style={styles(progress).overlayProgressBar} />
    </View>
  )
}

function styles(progress: number) {
  return StyleSheet.create({
    containerProgressBar: {
      flex: 1,
      marginTop: 10,
    },
    backgroundProgressBar: {
      height: 5,
      borderRadius: 10,
      backgroundColor: gray500,
    },
    overlayProgressBar: {
      position: 'absolute',
      height: 5,
      borderRadius: 10,
      backgroundColor: blueDark,
      width: `${progress}%`, // Cor com transparência
    },
  })
}
