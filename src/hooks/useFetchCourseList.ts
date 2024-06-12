import { useEffect, useState } from 'react'

import { And, ParameterRoot } from '~/types/api'
import { ResponseDataType } from '~/types/data'

const DefaultFilterConditions: ParameterRoot = {
  $and: [
    { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] },
    { is_datetime_enrollable: true }
  ]
}

//TODO : 이후 react-router-dom으로 파라미터를 가져와서 filterConditions값과 offset값을 변경
const filterConditions: And[] = [
  {
    title: '%%'
  },
  {
    $or: []
  },
  {
    $or: [
      {
        tag_id: 25
      },
      {
        tag_id: 10
      }
    ]
  }
]

const DEFAULT_COUNT = 20
const DEFAULT_OFFSET = 20

const mergeFilterConditions = (newConditions: And[]) => {
  return {
    $and: [...DefaultFilterConditions.$and, ...newConditions]
  }
}

const useFetchCourseList = () => {
  const [courseList, setCourseList] = useState<ResponseDataType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourseList = async (filterConditions: And[], offset: number) => {
      const baseURL = 'https://api-rest.elice.io/org/academy/course/list/'
      const params = new URLSearchParams({
        filter_conditions: JSON.stringify(
          mergeFilterConditions(filterConditions)
        ),
        offset: offset.toString(),
        count: DEFAULT_COUNT.toString()
      })

      const url = `${baseURL}?${params.toString()}`

      try {
        setIsLoading(true)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('네트워크 응답이 올바르지 않습니다.')
        }
        const data: ResponseDataType = await response.json()
        setCourseList(data)
      } catch (error) {
        console.error('Fetch 에러:', error)
        setError('데이터를 불러오는 중 문제가 발생했습니다.')
        setCourseList(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourseList(filterConditions, DEFAULT_OFFSET)
  }, [])

  return { courseList, isLoading, error }
}

export default useFetchCourseList
