import { FC } from 'react'

import GlobalStyles from './GlobalStyles'

import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import { main } from './templates'

const ThemeProvider: FC =  (props) => {
  return (
    <ThemeProviderStyled theme={main}>
      <GlobalStyles />
      {props.children}
    </ThemeProviderStyled>
  )
}

export default ThemeProvider