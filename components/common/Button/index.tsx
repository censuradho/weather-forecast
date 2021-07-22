import { ReactNode, ButtonHTMLAttributes} from 'react'
import { memo } from 'react'

import * as Styles from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

function Button ({ children, ...props }: ButtonProps) {
  return (
    <Styles.Button {...props}>
      {children}
    </Styles.Button>
  )
}

export default memo(Button)