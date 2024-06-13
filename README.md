# ✨엘리스 미니 프로젝트

## ✅요구 사항

[구현 사이트](https://academy.elice.io/courses/all)를 보고 구현하기

- UI 구현
  - 기본적인 요구사항을 구현할 수 있는지 평가합니다.
- 코드 스타일
  - 전반적인 코드 스타일을 확인합니다.(prettier, eslint 등 적용가능)
- 상태관리
  - 전역상태, 로컬상태관리 등 상태관리 아키텍쳐를 어떻게 설계하는지 평가합니다.
- 비동기처리
  - 비동기처리를 핸들하는 방법에 대해 평가합니다. (에러처리등)
- 프로젝트 구조 설계
  - 웹팩, lint 설정, 폴더 구조 등을 확인합니다.
- 테스트코드 작성(optional)
  - 테스트코드를 효율적으로 잘 작성할 수 있는지 확인합니다. (유닛테스트,
    통합테스트등 테스트가 필요하다고 생각하는 로직에 테스트코드를 자유롭게
    작성하세요.)

## 🤔해결 방식

<details>
<summary style="font-size: 17px; font-weight: 600; background-color: rgba(115, 83, 234,0.2);">⚙️1. 개발 환경 세팅하기</summary>

- 🔗[PR](https://github.com/oridori2705/elice-project/pull/2)

### 🛠️ 개발 환경 세팅(Vite, Eslint, Prettier, Emotion)

- Vite를 사용해 빠르게 React 개발 환경 구축
- 빠르고 안정된 개발을 위해 Eslint와 Prettier 설정
- Styled-Components를 사용하기 위해 Emotion 설치
- 예제 사이트를 모방해 프로젝트 완성을 위해 폰트 설치

해당 과정에서 Eslint와 Prettier 설정에 대해 [더 깊이 알게 되었습니다.](https://ydoag2003.tistory.com/493)

</details>

<details>
<summary style="font-size: 17px; font-weight: 600; background-color: rgba(115, 83, 234,0.2);">✨2. CourseCard 컴포넌트 구현하기</summary>

- 🔗[PR](https://github.com/oridori2705/elice-project/pull/6)

### 🛠️ CourseCard 컴포넌트 구현

- `합성 컴포넌트 패턴`을 이용해 CourseCard 컴포넌트 구현
  - 이후 난이도, 수업 유형, 기간을 쉽게 추가할 수 있도록 하기 위함
  - 재사용성, 유연성 높이기 위해 해당 패턴 사용
- 응답 데이터 타입 정의
- 폰트 변경
- `enroll_type`과 `is_free`를 이용해 `무료`, `가격`, `관리자 등록` 표시 (enroll_type이 5인 경우 - 관리자 등록)
- `tags`안에 `tag_type: 3` 값이 없다면 `미분류`로 표시
- 각각 받아오는 데이터가 다른 경우가 있어 `옵셔널 타입을 부분 구성`
- `filter`를 이용한 `타입 좁히기`를 처음 활용해 보았음(분류 데이터만을 타입으로 갖기 위해)

```
  function isCardTagNameType(value: TagName): value is CardTagNameType {
    return [
      'programmer',
      'dataScientist',
      'webDeveloper',
      'aiml',
      'algorithm'
    ].includes(value)
  }
```

</details>

<details>
<summary style="font-size: 17px; font-weight: 600; background-color: rgba(115, 83, 234,0.2);">✨3. CourseList 컴포넌트 구현하기 & API 데이터 활용하기 </summary>

- 🔗[PR](https://github.com/oridori2705/elice-project/pull/8)

### 🛠️ CourseCard 컴포넌트 리팩토링

- `CourseCard`의 Title 부분 두 줄 ellipsis 기능 수정
- `CourseCard`의 logo이미지와 file 이미지가 모두 없을 경우를 위해 default 이미지 추가

### 🛠️ CourseList 컴포넌트 구현

- `CourseCard`를 나열하는 `CourseList` 컴포넌트 구현
- grid를 이용해 반응형 디자인
- 현재 반응형을 실제 사이트와 동일하게 구현했는데 실제 사이트는 12개의 데이터를 보여주고 있고, 요구사항은 20개의 데이터를 보여주는 것으로 되어있어 만약 3열로 된다면 하단 마지막 부분에 빈 영역이 생기고 있음
  - 3열로 바뀌는 반응형을 제거하는 방법과 같이 추후 해결해야 하는 부분

### 🛠️ 추가 컴포넌트 구현

- Course 데이터가 요청 중일 경우를 위해 로딩 기능 구현 및 `Spinner` 컴포넌트 구현
- Course 데이터의 검색 결과가 없을 경우를 위해 `NoResultsFound` 컴포넌트 구현
- 전체 Course 데이터의 개수를 출력하는 `TotalListCount 컴포넌트` 구현
- `CouseList`와 `TotalListCount`를 감싸주는 `CourseListContainer` 컴포넌트 구현

### 🛠️ useFetchCourseList 커스텀 훅 구현

- useFetchCourseList 커스텀 훅을 만들어 API 요청 로직 모듈화
- useFetchCourseList 내에서 API요청과 관련된 useState와 useEffect를 모두 관리하고 있음
  - 이후 필터에서의 state값이나 검색에서의 state값은 해당 훅에서 관리할 계획 - 너무 많은역할을 한다면 분리 계획도 예상
    - useFetchCourseList 훅에서 filter값을 관리하는 useState의 set함수를 내려줘서 chip 내부에서 이벤트로 set함수를 호출하고, url을 바꿔준다.
    - 그리고 다시 useFetchCourseList에서는 이 state변화를 감지하고 추가된 필터 값을 가공해 다시 api 요청을 해준다.

</details>

<details>
<summary style="font-size: 17px; font-weight: 600; background-color: rgba(115, 83, 234,0.2);">✨4. 필터링을 위한 Chip 버튼과 필터기능, url query 저장 기능 구현 </summary>

- 🔗[PR](https://github.com/oridori2705/elice-project/pull/9)

### 🛠️Chip 컴포넌트 구현

- 클릭 시 지정된 `filter_conditions`값을 포함해서 API 요청
- 클릭 시 현재 `url query`를 지정된 `query`로 변경
- 새로고침시 현재 `url query`를 이용해 이전 필터 정보 불러오는 기능 구현
- Chip 버튼은 복수 선택이 가능

-> Chip 버튼들은 `미리 지정된 상수 값`으로 나열되었습니다.

```
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
```

### 🛠️useFetchCourseList 리팩토링

- 현재 filter된 값을 useState로 관리
  - 초기 값은 `현재 url`을 변환해서 `지정된 객체 값`으로 저장
- 저장한 filter값이 변하면 변경된 파라미터로 API 요청
- filter에는 임으로 지정된 Id값으로 관리되는데 미리 정의한 상수 객체를 이용해 대응되는 파라미터 값으로 변환

```
6: {
    id: 6,
    name: '프로그래밍 기초',
    type: 'category',
    data: [{ tag_id: 12 }] // 파라미터에 필요한 값
  },
```

### 🚧 특이 사항

- `react-router-dom` 라이브러리 설치

  - `useSearchParam`s와 `useLocation` 사용을 위해 설치
  - 해당 라이브러리로 이후 카드 클릭 시 상세 정보 페이지도 구현 가능 예상

- 타입단언 `as` 키워드가 두 곳에서 사용됨

  - 이후 리팩토링 계획

- 카드요소가 바뀔 때 로딩 -> 카드 요소가 나타나는 순서로 인해 스크롤이 사라졌다 생기는 현상이 있는데 이로 인해 요소들이 가로로 떨리는 문제

  - Root 요소에 `min-height`를 부여해서 스크롤이 항상 있도록 하게 해서 문제 해결
  - 임시로 해결한 문제이므로 이후 로딩을 스피너가 아닌 `스켈레톤 UI 방식`을 활용하는 방법으로 문제 해결 계획

- 스크롤 바 스타일링 추가

  - 엘리스 예제 사이트 그대로 구현

- ⚠️ **API Base url은 env 파일로 분리해서 관리**
  - 클론해서 사용시 env 추가 필요

### 📜관계도 정리

<img src="https://i.ibb.co/418DBWP/saf-fasfsafas.png"/>

</details>
