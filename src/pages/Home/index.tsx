import { StatusBar, Text, View } from 'react-native'
import { styles } from './styles'
import { Content } from '../../components/molecules/Content'
import { Header } from '../../components/molecules/Header'

export function Home() {
  return (
    <View style={styles.layout}>
      <StatusBar barStyle={'default'} />
      <Header />
      <Content />
    </View>
  )
}
