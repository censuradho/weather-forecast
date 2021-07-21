import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Section = styled.section`
  padding: 1rem;
  
`

export const SectionTitle = styled.span`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.heading};
  font-weight: 400;
  margin-bottom: 1.2rem;
  display: inline-block;
`

export const Temperature = styled.span`
  font-size: 3.75rem;
  color: ${props => props.theme.colors.heading};
`

export const IconWeather = styled.div`
  width: 7rem;
  height: 7rem;
  position: relative;
`

export const Label = styled.strong`

`

export const Value = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.colors.heading};
`

export const TemperatureMinMaxIcon = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`

export const WeekContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1.1rem;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none
  }
`