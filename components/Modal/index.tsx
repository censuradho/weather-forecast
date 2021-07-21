import { FC } from 'react'
import * as Styles from './styles'

interface ModalProps {
  isVisible?: boolean,
}

const Modal: FC<ModalProps> = (props) => {
  if (!props.isVisible) return null

  return (
    <Styles.Overlay>
      {props.children}
    </Styles.Overlay>
  )
}

export default Modal
