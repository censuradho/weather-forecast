import { memo } from "react"

import useTheme from "hooks/useTheme"

import * as Styles from './styles'

interface ActivityIndicatorProps {
  size?: number,
  isVisible?: boolean
}

function ActivityIndicator ({ size = 4, ...props }: ActivityIndicatorProps) {
  const { colors } = useTheme()

  if (!props.isVisible) return null
  
  return (
    <Styles.Container>
        <svg width={`${size}rem`} height={`${size}rem`} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="50" cy="50" r="30" stroke={colors.foreground} strokeWidth="10" fill="none"></circle>
          <circle cx="50" cy="50" r="30" stroke={colors.primary} strokeWidth="8" strokeLinecap="round" fill="none">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1"></animateTransform>
            <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1s" values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882" keyTimes="0;0.5;1"></animate>
          </circle>
        </svg>
    </Styles.Container>
  )
}

export default memo(ActivityIndicator)
