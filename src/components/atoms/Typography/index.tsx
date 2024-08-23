import { Text } from 'react-native'
import { InterBold, InterRegular } from '../../../utils/globalStyle'

interface ITypographyProps {
  text: string
  bold?: boolean
  color?: string
}

export function Typography(props: ITypographyProps) {
  const { text, bold, color } = props

  console.log(bold)

  return (
    <Text
      style={{
        color: color ? color : '',
        fontWeight: bold ? 700 : 400,
      }}
    >
      {text}
    </Text>
  )
}
