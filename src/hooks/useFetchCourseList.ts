import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchCourseList } from '~/api'
import { categoriesObject } from '~/constants/course'
import {
  DEFAULT_COUNT,
  DEFAULT_OFFSET,
  Filters,
  filtersInitialState
} from '~/constants/filter'
import { ResponseDataType } from '~/types/data'
import { generateAPIParams, parseFiltersFromQuery } from '~/utils'

const useFetchCourseList = () => {
  const location = useLocation()
  const [courseList, setCourseList] = useState<ResponseDataType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [filters, setFilters] = useState<Filters>(() =>
    location.search
      ? parseFiltersFromQuery(location.search)
      : filtersInitialState
  )

  useEffect(() => {
    const loadCourseList = async () => {
      const apiParams = generateAPIParams(filters, categoriesObject)

      try {
        setIsLoading(true)
        const data = await fetchCourseList(
          apiParams,
          DEFAULT_OFFSET,
          DEFAULT_COUNT
        )
        setCourseList(data)
      } catch (error) {
        console.error('Fetch 에러:', error)
        setError('데이터를 불러오는 중 문제가 발생했습니다.')
        setCourseList(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadCourseList()
  }, [filters])

  return { courseList, isLoading, error, setFilters }
}

export default useFetchCourseList
