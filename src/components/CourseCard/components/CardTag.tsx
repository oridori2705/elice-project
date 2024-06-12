import styled from '@emotion/styled'

import { CardTagNameType, Tag, TagName } from '~/types/data'

interface CardTagProps {
  tag: Tag[]
}

const TagToFiledObject = {
  programmer: '프로그래밍 기초',
  dataScientist: '데이터 분석',
  webDeveloper: '웹',
  aiml: '인공지능',
  algorithm: '알고리즘'
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

const isCardTagNameType = (value: TagName): value is CardTagNameType => {
  return [
    'programmer',
    'dataScientist',
    'webDeveloper',
    'aiml',
    'algorithm'
  ].includes(value)
}
const getDisplayText = (tagArray: Tag[]): string => {
  const categorizedTags = tagArray
    ? tagArray
        .filter(data => data.tag_type === 3)
        .map(data => data.name)
        .filter(isCardTagNameType)
    : []

  if (categorizedTags.length === 0) {
    return '미분류'
  }

  const designatedFiled = categorizedTags.map(data => TagToFiledObject[data])

  return designatedFiled.join(', ')
}

export const CardTag = ({ tag }: CardTagProps) => {
  const displayText = getDisplayText(tag)

  return <CardTagWrapperDiv>{displayText}</CardTagWrapperDiv>
}
