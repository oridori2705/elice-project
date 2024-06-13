interface CourseTypeData {
  course_type: number
}

interface TagIdData {
  tag_id: number
}

interface EnrollTypeData {
  enroll_type: number
  is_free?: boolean
}

export type CategoryData = CourseTypeData | TagIdData | EnrollTypeData

export interface CategoriesArray {
  유형: CategoryItem<CourseTypeData>[]
  '진행 방식': CategoryItem<CourseTypeData>[]
  분야: CategoryItem<TagIdData>[]
  난이도: CategoryItem<TagIdData>[]
  언어: CategoryItem<TagIdData>[]
  가격: CategoryItem<EnrollTypeData>[]
}

export interface CategoryItem<T extends CategoryData> {
  id: number
  name: string
  type: string
  data: T[]
}

export type Categories = {
  [key: number]: CategoryItem<CategoryData>
}

export const categoriesObject: Categories = {
  1: {
    id: 1,
    name: '과목',
    type: 'courseType',
    data: [{ course_type: 0 }, { course_type: 2 }]
  },
  2: {
    id: 2,
    name: '챌린지',
    type: 'courseType',
    data: [{ course_type: 1 }]
  },
  3: {
    id: 3,
    name: '테스트',
    type: 'courseType',
    data: [{ course_type: 3 }]
  },
  4: {
    id: 4,
    name: '자유 선택형',
    type: 'format',
    data: [{ course_type: 0 }]
  },
  5: {
    id: 5,
    name: '순차 완료형',
    type: 'format',
    data: [{ course_type: 2 }]
  },
  6: {
    id: 6,
    name: '프로그래밍 기초',
    type: 'category',
    data: [{ tag_id: 12 }]
  },
  7: {
    id: 7,
    name: '데이터 분석',
    type: 'category',
    data: [{ tag_id: 13 }]
  },
  8: {
    id: 8,
    name: '웹',
    type: 'category',
    data: [{ tag_id: 14 }]
  },
  9: {
    id: 9,
    name: '인공지능',
    type: 'category',
    data: [{ tag_id: 22 }]
  },
  10: {
    id: 10,
    name: '알고리즘',
    type: 'category',
    data: [{ tag_id: 23 }]
  },
  11: {
    id: 11,
    name: '입문',
    type: 'level',
    data: [{ tag_id: 100 }]
  },
  12: {
    id: 12,
    name: '초급',
    type: 'level',
    data: [{ tag_id: 101 }]
  },
  13: {
    id: 13,
    name: '중급',
    type: 'level',
    data: [{ tag_id: 102 }]
  },
  14: {
    id: 14,
    name: '고급',
    type: 'level',
    data: [{ tag_id: 103 }]
  },
  15: {
    id: 15,
    name: '심화',
    type: 'level',
    data: [{ tag_id: 104 }]
  },
  16: {
    id: 16,
    name: 'C',
    type: 'programmingLanguage',
    data: [{ tag_id: 7 }]
  },
  17: {
    id: 17,
    name: 'C++',
    type: 'programmingLanguage',
    data: [{ tag_id: 8 }]
  },
  18: {
    id: 18,
    name: '자바',
    type: 'programmingLanguage',
    data: [{ tag_id: 9 }]
  },
  19: {
    id: 19,
    name: '파이썬',
    type: 'programmingLanguage',
    data: [{ tag_id: 10 }]
  },
  20: {
    id: 20,
    name: '자바스크립트',
    type: 'programmingLanguage',
    data: [{ tag_id: 19 }]
  },
  21: {
    id: 21,
    name: 'R',
    type: 'programmingLanguage',
    data: [{ tag_id: 20 }]
  },
  22: {
    id: 22,
    name: 'HTML/CSS',
    type: 'programmingLanguage',
    data: [{ tag_id: 21 }]
  },
  23: {
    id: 23,
    name: 'SQL',
    type: 'programmingLanguage',
    data: [{ tag_id: 24 }]
  },
  24: {
    id: 24,
    name: '아두이노',
    type: 'programmingLanguage',
    data: [{ tag_id: 25 }]
  },
  25: {
    id: 25,
    name: '스크래치',
    type: 'programmingLanguage',
    data: [{ tag_id: 26 }]
  },
  26: {
    id: 26,
    name: '코틀린',
    type: 'programmingLanguage',
    data: [{ tag_id: 28 }]
  },
  27: {
    id: 27,
    name: '스위프트',
    type: 'programmingLanguage',
    data: [{ tag_id: 29 }]
  },
  28: {
    id: 28,
    name: '엔트리',
    type: 'programmingLanguage',
    data: [{ tag_id: 30 }]
  },
  29: {
    id: 29,
    name: '무료',
    type: 'price',
    data: [{ enroll_type: 0, is_free: true }]
  },
  30: {
    id: 30,
    name: '유료',
    type: 'price',
    data: [{ enroll_type: 0, is_free: false }]
  },
  31: {
    id: 31,
    name: '구독',
    type: 'price',
    data: [{ enroll_type: 4 }]
  },
  32: {
    id: 32,
    name: '학점',
    type: 'price',
    data: [{ enroll_type: 6 }]
  }
}

export const categorizedCategoriesArray: CategoriesArray = {
  유형: [
    {
      id: 1,
      name: '과목',
      type: 'courseType',
      data: [{ course_type: 0 }, { course_type: 2 }]
    },
    {
      id: 2,
      name: '챌린지',
      type: 'courseType',
      data: [{ course_type: 1 }]
    },
    {
      id: 3,
      name: '테스트',
      type: 'courseType',
      data: [{ course_type: 3 }]
    }
  ],
  '진행 방식': [
    {
      id: 4,
      name: '자유 선택형',
      type: 'format',
      data: [{ course_type: 0 }]
    },
    {
      id: 5,
      name: '순차 완료형',
      type: 'format',
      data: [{ course_type: 2 }]
    }
  ],
  분야: [
    {
      id: 6,
      name: '프로그래밍 기초',
      type: 'category',
      data: [{ tag_id: 12 }]
    },
    {
      id: 7,
      name: '데이터 분석',
      type: 'category',
      data: [{ tag_id: 13 }]
    },
    {
      id: 8,
      name: '웹',
      type: 'category',
      data: [{ tag_id: 14 }]
    },
    {
      id: 9,
      name: '인공지능',
      type: 'category',
      data: [{ tag_id: 22 }]
    },
    {
      id: 10,
      name: '알고리즘',
      type: 'category',
      data: [{ tag_id: 23 }]
    }
  ],
  난이도: [
    {
      id: 11,
      name: '입문',
      type: 'level',
      data: [{ tag_id: 100 }]
    },
    {
      id: 12,
      name: '초급',
      type: 'level',
      data: [{ tag_id: 101 }]
    },
    {
      id: 13,
      name: '중급',
      type: 'level',
      data: [{ tag_id: 102 }]
    },
    {
      id: 14,
      name: '고급',
      type: 'level',
      data: [{ tag_id: 103 }]
    },
    {
      id: 15,
      name: '심화',
      type: 'level',
      data: [{ tag_id: 104 }]
    }
  ],
  언어: [
    {
      id: 16,
      name: 'C',
      type: 'programmingLanguage',
      data: [{ tag_id: 7 }]
    },
    {
      id: 17,
      name: 'C++',
      type: 'programmingLanguage',
      data: [{ tag_id: 8 }]
    },
    {
      id: 18,
      name: '자바',
      type: 'programmingLanguage',
      data: [{ tag_id: 9 }]
    },
    {
      id: 19,
      name: '파이썬',
      type: 'programmingLanguage',
      data: [{ tag_id: 10 }]
    },
    {
      id: 20,
      name: '자바스크립트',
      type: 'programmingLanguage',
      data: [{ tag_id: 19 }]
    },
    {
      id: 21,
      name: 'R',
      type: 'programmingLanguage',
      data: [{ tag_id: 20 }]
    },
    {
      id: 22,
      name: 'HTML/CSS',
      type: 'programmingLanguage',
      data: [{ tag_id: 21 }]
    },
    {
      id: 23,
      name: 'SQL',
      type: 'programmingLanguage',
      data: [{ tag_id: 24 }]
    },
    {
      id: 24,
      name: '아두이노',
      type: 'programmingLanguage',
      data: [{ tag_id: 25 }]
    },
    {
      id: 25,
      name: '스크래치',
      type: 'programmingLanguage',
      data: [{ tag_id: 26 }]
    },
    {
      id: 26,
      name: '코틀린',
      type: 'programmingLanguage',
      data: [{ tag_id: 28 }]
    },
    {
      id: 27,
      name: '스위프트',
      type: 'programmingLanguage',
      data: [{ tag_id: 29 }]
    },
    {
      id: 28,
      name: '엔트리',
      type: 'programmingLanguage',
      data: [{ tag_id: 30 }]
    }
  ],
  가격: [
    {
      id: 29,
      name: '무료',
      type: 'price',
      data: [{ enroll_type: 0, is_free: true }]
    },
    {
      id: 30,
      name: '유료',
      type: 'price',
      data: [{ enroll_type: 0, is_free: false }]
    },
    {
      id: 31,
      name: '구독',
      type: 'price',
      data: [{ enroll_type: 4 }]
    },
    {
      id: 32,
      name: '학점',
      type: 'price',
      data: [{ enroll_type: 6 }]
    }
  ]
}
