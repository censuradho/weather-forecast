import styled from 'styled-components'

export const Button = styled.button`
  width: max-content;
   background: ${props => props.theme.colors.primaryLight};
   padding: 1rem;
   color: ${props => props.theme.colors.primary};
   font-weight: 600;
   border-radius: ${props => props.theme.borderRadius};
`