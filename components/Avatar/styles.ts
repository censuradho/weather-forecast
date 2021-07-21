import styled from 'styled-components'

export const Container = styled.div<{ size: number }>`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: 50%;
  background: ${props => props.theme.colors.foreground};
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  }
`
