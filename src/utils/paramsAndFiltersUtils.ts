import { Filters } from '~/constants/filter'

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
