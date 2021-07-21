import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Day = styled.strong`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.heading};
  font-weight: 400;
`

export const MinTemperature = styled.span`

`

export const MaxTemperature = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.colors.heading}
`