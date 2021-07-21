import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`

export const Overlay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${props => props.theme.colors.backgroundGradient}; // rgba(0, 0, 0, .4);
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y:scroll;
  left: 0;
  z-index: 100;
  backdrop-filter: blur(14px);
  animation: ${fadeIn} .3s forwards;

  ::-webkit-scrollbar {
      display: none
  }


`

