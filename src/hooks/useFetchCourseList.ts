import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchCourseList } from '~/api'
import { categoriesObject } from '~/constants/course'
import { DEFAULT_COUNT, Filters, filtersInitialState } from '~/constants/filter'
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

  const [offset, setOffset] = useState(1)
  const scrollToStartRef = useRef<HTMLDivElement | null>(null)

  const toggleFilterValue = useCallback(
    (type: keyof Filters, value: number) => {
      setFilters(prevState => {
        if (type === 'keyword') return prevState
        const newValues = prevState[type].includes(value)
          ? prevState[type].filter(item => item !== value)
          : [...prevState[type], value]
        const result = { ...prevState, [type]: newValues }

        return result
      })
    },
    []
  )

  const updateKeyword = useCallback((keyword: string) => {
    setFilters(prevState => ({
      ...prevState,
      keyword
    }))
  }, [])

  const updateOffset = useCallback((newOffset: number) => {
    setOffset(newOffset)
  }, [])

  useEffect(() => {
    const loadCourseList = async () => {
      const apiParams = generateAPIParams(filters, categoriesObject)

      try {
        setIsLoading(true)
        const data = await fetchCourseList(
          apiParams,
          20 * (offset - 1),
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
  }, [filters, offset])

  useEffect(() => {
    setOffset(1)
  }, [filters])

  return {
    courseList,
    isLoading,
    error,
    offset,
    scrollToStartRef,
    toggleFilterValue,
    updateOffset,
    updateKeyword
  }
}

export default useFetchCourseList
