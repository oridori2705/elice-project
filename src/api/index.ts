import { ParameterRoot } from '~/types/api'
import { ResponseDataType } from '~/types/data'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const fetchCourseList = async (
  filterConditions: ParameterRoot,
  offset: number,
  count: number
): Promise<ResponseDataType> => {
  const params = new URLSearchParams({
    filter_conditions: JSON.stringify(filterConditions),
    offset: offset.toString(),
    count: count.toString()
  })

  const url = `${baseURL}?${params.toString()}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('네트워크 응답이 올바르지 않습니다.')
  }
  return response.json()
}
