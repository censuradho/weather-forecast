import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

export const LinkBackward = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;

  svg {
    fill: ${props => props.theme.colors.heading};
  }
`

export const Title = styled.h1`
  font-size: 1rem;
  color: ${props => props.theme.colors.heading};
  font-weight: 400;
`

export const Form = styled.form`
  padding: 1rem;
`

export const ListContainer = styled.section`
flex: 1;
overflow-y: scroll;
display: flex;
flex-direction: column;
padding: 1rem;
`

export const ListTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.theme.colors.heading};
  width: max-content;
`

export const List = styled.ul`
  flex: 1;
  overflow-y: scroll;

`

export const Item = styled.li`
  font-size: 1rem;
  padding: 1rem 0;
  cursor: pointer;
`