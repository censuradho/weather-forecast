import styled from 'styled-components'

export const Header = styled.header<{ isScrolled?: boolean }>`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: -1px;
  background: ${props => props.isScrolled ? props.theme.colors.background : 'transparent'};
  z-index: 9;
  svg {
    fill: ${props => props.theme.colors.heading};
  }
`

export const Title = styled.h1`
  font-size: 1rem;
  padding: 0 1rem;
  flex: 1;
  color: ${props => props.theme.colors.heading}
`
