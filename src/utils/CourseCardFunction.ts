import { CardPriceProps } from '~/components/CourseCard/components/CardPrice'
import { TagToFiledObject } from '~/constants/filter'
import { CardTagNameType, Tag, TagName } from '~/types/data'

/**
 * 카드 가격 텍스트를 반환하는 함수
 * @param {CardPriceProps} props - 카드 가격 정보
 * @returns {string} - 가격 텍스트
 */
export const getCardPriceText = ({
  enroll_type,
  is_free,
  price
}: CardPriceProps): string => {
  if (enroll_type === 0) {
    return is_free ? '무료' : `₩${Number(price).toLocaleString()}`
  } else if (enroll_type === 4) {
    return '구독'
  } else if (enroll_type === 5) {
    return '관리자 등록'
  }

  return ''
}

/**
 * 특정 값이 CardTagNameType 인지 확인하는 사용자 정의 타입 가드 함수
 * @param {TagName} value - 확인할 값
 * @returns {boolean} - CardTagNameType 여부
 */
const isCardTagNameType = (value: TagName): value is CardTagNameType => {
  return [
    'programmer',
    'dataScientist',
    'webDeveloper',
    'aiml',
    'algorithm'
  ].includes(value)
}

/**
 * 태그 배열을 받아서 표시할 텍스트를 반환하는 함수
 * @param {Tag[]} tagArray - 태그 배열
 * @returns {string} - 표시할 텍스트
 */
export const getDisplayText = (tagArray: Tag[]): string => {
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
