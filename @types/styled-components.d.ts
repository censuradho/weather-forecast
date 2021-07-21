import { Theme } from '_interfaces/theme'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}