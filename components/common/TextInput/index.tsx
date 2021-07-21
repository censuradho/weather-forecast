import { InputHTMLAttributes } from "react";
import { memo, ReactNode } from "react";

import * as Styles from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  left?: ReactNode
}

function TextInput ({ left, ...props}: TextInputProps) {
  return (
    <Styles.Container>
      {left}
      <Styles.Input 
        placeholder="Pesquisar" 
        {...props}
      />
    </Styles.Container>
  )
}

export default memo(TextInput)