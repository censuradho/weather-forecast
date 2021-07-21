import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 96px);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const H1 = styled.h1`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.heading};
  font-weight: 400;
`

export const FavoriteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: scroll;
  width: 100%;
  align-items: flex-start;
  gap: 1.2rem;
  flex: 1;
`
