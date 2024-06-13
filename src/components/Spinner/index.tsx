import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const spinning = keyframes`
     0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
const Loader = styled.div`
  width: 92px;
  height: 92px;
  border: 3px solid rgb(82, 79, 161);
  border-top-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${spinning} 1s infinite linear;
`

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`

const Spinner = () => {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  )
}
export default Spinner
