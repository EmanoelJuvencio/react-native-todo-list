import { Text, TextStyle } from 'react-native'
import { InterBold, InterRegular } from '../../../utils/globalStyle'

interface ITypographyProps {
  text: string
  bold?: boolean
  style: TextStyle
}

export function Typography(props: ITypographyProps) {
  const { text, bold, style } = props

  return (
    <Text
      style={{
        ...style,
        fontWeight: bold ? 700 : 400,
      }}
    >
      {text}
    </Text>
  )
}
