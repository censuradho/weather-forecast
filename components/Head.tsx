import { memo } from 'react'
import HeadNext from 'next/head'

interface HeadProps {
  title: string,
}

function Head (props: HeadProps) {
  return (
    <HeadNext key="main">
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
    </HeadNext>
  )
}

export default memo(Head)