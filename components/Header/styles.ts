import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;  
  height: 96px;
  position: sticky;
  top: 0;
  padding: 1rem;
  z-index: 10;
  background: ${props => props.theme.colors.background};
`

export const Greeting = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  
  span {
    font-size: 1.438rem;
    color: ${props => props.theme.colors.heading};
  }


  strong {
    color: ${props => props.theme.colors.primary};
    font-size: 1.6rem;
    font-weight: 500;
  }
`