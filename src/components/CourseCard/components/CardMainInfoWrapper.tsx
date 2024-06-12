import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface CardMainInfoWrapperProps {
  children: ReactNode
}

const CardMainInfoWrapperDiv = styled.div`
  padding: 1.25rem;
`

export const CardMainInfoWrapper = ({ children }: CardMainInfoWrapperProps) => {
  return <CardMainInfoWrapperDiv>{children}</CardMainInfoWrapperDiv>
}
