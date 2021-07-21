import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    left: 1rem;
  }
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background: ${PROPS => PROPS.theme.colors.foreground};
  border: none;
  padding: 0 1rem 0 2.33rem;
  height: 3rem;
  outline: none;
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid transparent;
  color: ${props => props.theme.colors.heading};
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`

