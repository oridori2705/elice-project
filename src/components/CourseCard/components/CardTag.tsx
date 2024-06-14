import styled from '@emotion/styled'

import { Tag } from '~/types/data'
import { getDisplayText } from '~/utils/CourseCardFunction'

interface CardTagProps {
  tag: Tag[]
}

const CardTagWrapperDiv = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  height: 1.125rem;
  line-height: 1.6;
  overflow: hidden;
  padding: 0 !important;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  color: #524fa1;
  font-weight: 700;
`

export const CardTag = ({ tag }: CardTagProps) => {
  const displayText = getDisplayText(tag)

  return <CardTagWrapperDiv>{displayText}</CardTagWrapperDiv>
}
