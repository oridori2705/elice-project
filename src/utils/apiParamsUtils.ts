import { Categories } from '~/constants/course'
import { Filters } from '~/constants/filter'
import { Or, ParameterRoot } from '~/types/api'

/**
 * API 요청 시 추가할 파라미터와 기본 파라미터를 합쳐주는 함수
 * @param {Filters} filterData - 필터 데이터
 * @param {Categories} categoriesObject - 카테고리 객체
 * @returns {ParameterRoot} - 합쳐진 API 파라미터
 */
export const generateAPIParams = (
  filterData: Filters,
  categoriesObject: Categories
): ParameterRoot => {
  const apiParams: ParameterRoot = {
    $and: [
      { title: '%%' },
      { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] },
      { is_datetime_enrollable: true }
    ]
  }

  Object.entries(filterData).forEach(([key, values]) => {
    if (Array.isArray(values) && values.length > 0) {
      const orCondition = values.map(
        (value: number) => categoriesObject[value].data as Or
      )
      apiParams['$and'].push({ $or: orCondition.flat() })
    } else if (key === 'keyword') {
      apiParams['$and'][0].title = `%${values}%`
    }
  })

  return apiParams
}

/**
 * 파라미터가 추가되어야 할 때 기존 파라미터를 확인 후 추가하거나 삭제(건너뛰는)하는 함수
 * @param {URLSearchParams} currentSearchParams - 현재 URLSearchParams 객체
 * @param {keyof Filters} type - 필터 타입
 * @param {string} id - 추가하거나 삭제할 필터 ID
 * @returns {string} - 업데이트된 query string
 */
export const updateQueryParam = (
  currentSearchParams: URLSearchParams,
  type: keyof Filters,
  id: string
): string => {
  let paramsString = ''
  let isUnChecked = false
  for (const [key, value] of currentSearchParams.entries()) {
    if (type === key && value === id) {
      isUnChecked = true
      continue
    }
    paramsString += `${key}=${value}&`
  }
  if (!isUnChecked) paramsString += `${type}=${id}`

  return paramsString
}
