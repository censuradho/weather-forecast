import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    transform: translateY(-1rem);
    opacity: 0
  }
  to {
    transform: translateY(0rem);
    opacity: 1
  }
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animation} 1s forwards ease;
`