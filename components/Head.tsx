import { memo } from 'react'
import HeadNext from 'next/head'

interface HeadProps {
  title: string,
}

function Head (props: HeadProps) {
  return (
    <HeadNext key={props.title}>
      <title>{props.title}</title>
    </HeadNext>
  )
}

export default memo(Head)