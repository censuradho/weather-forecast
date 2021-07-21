import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  height: 50px;
  display: flex;
  align-items: center;
  border-radius:  ${props => props.theme.borderRadius};
  padding: 0 1rem;
  
  > * {
    color: #fff;
    font-size: 1rem;
  }
  svg {
    fill: #fff
  }
`

