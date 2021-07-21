import { FC, memo } from 'react'
import Image from 'next/image'

interface IconProps {
  src: string,
  alt: string,
  size?: number,
  width?: number,
  height?: number
}

const Icon: FC<IconProps> = (props) => {
  return (
    <div style={{
      position: 'relative',
      width: `${props.width || props.size || 0}rem`,
      height: `${props.height || props.size || 0}rem`,
    }}>
      <Image 
        src={props.src} 
        alt={props.alt}
        layout="fill"
      />
    </div>
  )
}

export default memo(Icon)
