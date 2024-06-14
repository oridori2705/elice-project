import { Dispatch, SetStateAction } from 'react'

import { categoriesObject } from '~/constants/course'
import { Filters } from '~/constants/filter'
import { ParameterRoot } from '~/types/api'
import { ResponseDataType } from '~/types/data'
import { generateAPIParams } from '~/utils/apiParamsUtils'

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

export const loadCourseList = async (
  filters: Filters,
  offset: number,
  setCourseList: Dispatch<SetStateAction<ResponseDataType | null>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>
) => {
  const apiParams = generateAPIParams(filters, categoriesObject)
  try {
    setIsLoading(true)
    const data = await fetchCourseList(apiParams, 20 * (offset - 1), 20)
    setCourseList(data)
  } catch (error) {
    console.error('Fetch 에러:', error)
    setError('데이터를 불러오는 중 문제가 발생했습니다.')
    setCourseList(null)
  } finally {
    setIsLoading(false)
  }
}
