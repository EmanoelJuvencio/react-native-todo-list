import { StatusBar, Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/template/Header'
import { Content } from '../../components/template/Content'

export function Home() {
  return (
    <View style={styles.layout}>
      <StatusBar barStyle={'default'} />
      <Header />
      <Content />
    </View>
  )
}
