import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface CardMainWrapperProps {
  children: ReactNode
}

const CardMainWrapperDiv = styled.div`
  position: relative;
  display: flex;
  height: calc(100% - 145px);
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
`

export const CardMainWrapper = ({ children }: CardMainWrapperProps) => {
  return <CardMainWrapperDiv>{children}</CardMainWrapperDiv>
}
