import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { CardImage } from './components/CardImage'
import { CardMainInfoWrapper } from './components/CardMainInfoWrapper'
import { CardMainText } from './components/CardMainText'
import { CardMainWrapper } from './components/CardMainWrapper'
import { CardPrice } from './components/CardPrice'
import { CardTag } from './components/CardTag'
import { CardTitle } from './components/CardTitle'

interface CourseCardWrapper {
  children: ReactNode
}
const CourseCardWrapperDiv = styled.div`
  height: 100%;
  white-space: normal;
  overflow: hidden;
  padding: 0px;
  position: relative;
  border: 1px solid rgba(225, 226, 228, 0.75);
  max-width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  cursor: pointer;
`

const CourseCardWrapper = ({ children }: CourseCardWrapper) => {
  return <CourseCardWrapperDiv>{children}</CourseCardWrapperDiv>
}

const CourseCard = Object.assign(CourseCardWrapper, {
  CardImage,
  CardMainText,
  CardPrice,
  CardTag,
  CardTitle,
  CardMainWrapper,
  CardMainInfoWrapper
})

export default CourseCard
