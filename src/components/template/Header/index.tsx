import { StyleSheet, View } from 'react-native'
import { gray700 } from '../../../utils/globalStyle'
import { IconLogo } from '../../../icons/logo'

export function Header() {
  return (
    <View style={styles.container}>
      <IconLogo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    backgroundColor: gray700,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
