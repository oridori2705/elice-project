import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface CourseCardListProps {
  children: ReactNode
}

const CourseCardListWrapperDiv = styled.div`
  display: grid;
  margin: 12px;
  grid-template-rows: repeat(auto-fill, 384px);
  justify-content: center;
  min-height: 100vh;
  gap: 24px;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, calc(25% - 24px));
  }

  @media (max-width: 1279px) {
    grid-template-columns: repeat(auto-fill, calc(33.33333% - 24px));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, calc(50% - 24px));
  }

  @media (max-width: 575px) {
    grid-template-columns: 100%;
  }
`

const CourseCardList = ({ children }: CourseCardListProps) => {
  return (
    <div>
      <CourseCardListWrapperDiv>{children}</CourseCardListWrapperDiv>
    </div>
  )
}
export default CourseCardList
