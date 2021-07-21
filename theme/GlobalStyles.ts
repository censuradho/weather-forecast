import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${props => props.theme.colors.color}
  }
  body {
    background: ${props => props.theme.colors.background}
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.background};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.foreground};

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.foreground};
}
`

interface BoxProps {
  column?: boolean,
  flex?: number,
  justifyContent?: 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center',
  alignItems?: 'center' | 'flex-start' | 'flex-end',
  gap?: number,
  marginVertical?: number,
  marginHorizontal?: number,
  marginTop?: number
}

export const Box = styled.div<BoxProps>`
  display: flex;
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'stretch'};
  flex: ${props => props.flex || 'stretch'};
  flex-direction: ${props => props.column ? 'column' : 'row'};
  gap: ${props => `${props.gap}rem` || 'stretch'};
  margin: ${props => `${props.marginVertical || 0}rem ${props.marginHorizontal || 0}rem`};
  margin-top: ${props => `${props.marginTop || 0}rem`}
`
