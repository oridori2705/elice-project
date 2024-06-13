import { ReactNode } from 'react'

import { CourseCardListWrapperDiv } from './styled'

interface CourseCardListProps {
  children: ReactNode
}

const CourseCardList = ({ children }: CourseCardListProps) => {
  return (
    <div>
      <CourseCardListWrapperDiv>{children}</CourseCardListWrapperDiv>
    </div>
  )
}
export default CourseCardList
