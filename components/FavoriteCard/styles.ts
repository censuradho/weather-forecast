import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 10rem;
  cursor: pointer;
  padding: .5rem;
  background: ${props => props.theme.colors.backgroundGradient};
  backdrop-filter: blur(14px);
  border-radius: ${props => props.theme.borderRadius};
`

export const City = styled.span`
  font-size: 0.9rem;
  word-wrap: break-word;
  color: ${props => props.theme.colors.heading};
`

export const MeanTemperature = styled.strong`
  font-size: 2rem;
`

export const MinMaxLabelTemperature = styled.span`
  font-size: .9rem;
`

export const MinMaxValueTemperature = styled.strong`
  color: ${props => props.theme.colors.heading};
  font-size: .9rem;

`

export const Date = styled.span`
  display: block;
  margin-top: 1rem
`