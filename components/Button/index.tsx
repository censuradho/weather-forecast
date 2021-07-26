import { memo, ReactNode, MouseEvent } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { Box } from 'theme/GlobalStyles'

import * as Styles from './styles'

interface ButtonProps {
  children: ReactNode,
  onClick?: (event:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

function Button (props: ButtonProps) {

  return (
    <Styles.Button onClick={props?.onClick}>
      <Box 
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        {props.children}
      </Box>
      <MdKeyboardArrowRight size={35} />
    </Styles.Button>
  )
}

export default memo(Button)
