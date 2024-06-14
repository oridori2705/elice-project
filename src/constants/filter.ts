export const DEFAULT_COUNT = 20
export const DEFAULT_OFFSET = 0 //TODO: offset은 페이지네이션 때 동적으로 작동하도록 수정해야함

export interface Filters {
  category: number[]
  courseType: number[]
  format: number[]
  level: number[]
  price: number[]
  programmingLanguage: number[]
  keyword?: string
}

export const filtersInitialState: Filters = {
  category: [],
  courseType: [],
  format: [],
  level: [],
  price: [],
  programmingLanguage: []
}

export const TagToFiledObject = {
  programmer: '프로그래밍 기초',
  dataScientist: '데이터 분석',
  webDeveloper: '웹',
  aiml: '인공지능',
  algorithm: '알고리즘'
}
