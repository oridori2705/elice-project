import { Categories } from '~/constants/course'
import { Filters } from '~/constants/filter'
import { Or, ParameterRoot } from '~/types/api'

/**
 * 문자열로 된 query string을 상수로 정의된 filter 객체로 변환해주는 함수
 * @param {string} search - URL query string
 * @returns {Filters} - 변환된 필터 객체
 */
export const parseFiltersFromQuery = (search: string): Filters => {
  const params = new URLSearchParams(search)

  return {
    keyword: params.get('keyword') || '',
    category: params.getAll('category').map(Number),
    courseType: params.getAll('courseType').map(Number),
    format: params.getAll('format').map(Number),
    level: params.getAll('level').map(Number),
    price: params.getAll('price').map(Number),
    programmingLanguage: params.getAll('programmingLanguage').map(Number)
  }
}

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

/**
 * 현재 URLSearchParams 객체를 {"필터": [0,1,2]} 형식의 객체로 변환해주는 함수
 * @param {URLSearchParams} params - URLSearchParams 객체
 * @returns {Record<string, number[]>} - 변환된 필터 객체
 */
export const parseQueryStringToArray = (
  params: URLSearchParams
): Record<string, number[]> => {
  const result: Record<string, number[]> = {}

  for (const [key, value] of params.entries()) {
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(Number(value))
  }
  return result
}
