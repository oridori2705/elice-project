import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const spinning = keyframes`
     0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgb(82, 79, 161);
  border-top-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${spinning} 1s infinite linear;
`

export const LoaderWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`
