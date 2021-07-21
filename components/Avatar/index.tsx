import { memo } from 'react'
import Image from 'next/image'

import * as Styles from './styles'

interface AvatarProps {
  size: number,
  url?: string,
  username: string
}

function Avatar ({
  size,
  ...props
}: AvatarProps) {
  return (
    <Styles.Container size={size}>
      {props.url && (
        <Image 
          src={props.url} 
          alt={props.username} 
          layout="fill"
        />
      )}
    </Styles.Container>
  )
}

export default memo(Avatar)
