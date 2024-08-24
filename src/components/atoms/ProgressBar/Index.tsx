import { StyleSheet, View } from 'react-native'
import { blueDark, gray500 } from '../../../utils/globalStyle'

interface IProgressBar {
  progress: number
}

export function ProgressBar({ progress }: IProgressBar) {
  return (
    <View style={styles(progress).container}>
      <View style={styles(progress).background} />
      <View style={styles(progress).overlay} />
    </View>
  )
}

function styles(progress: number) {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
    },
    background: {
      height: 5,
      borderRadius: 10,
      backgroundColor: gray500,
    },
    overlay: {
      position: 'absolute',
      height: 5,
      borderRadius: 10,
      backgroundColor: blueDark,
      width: `${progress}%`,
    },
  })
}
