# ✨엘리스 미니 프로젝트

🔗 [배포 링크](https://elice-project-six.vercel.app/)

## ✅요구 사항
![image](https://github.com/oridori2705/elice-project/assets/90139306/3bcc9b18-7121-4e32-9962-a367267aaf7c)


[예제 사이트](https://academy.elice.io/courses/all)를 보고 구현하기

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

### Requirements
- 필수 조건
  - React 기반의 single page app (SPA) 를 만들어야 합니다.
  - 명시되지 않은 디자인의 경우 위의 production link 를 참조하시거나 자유롭게
구현하셔도 됩니다.
  - 사용하는 library, 기술, 언어는 다음 제약 사항 외에는 React 생태계 내에서 자유롭게
선택하시기 바랍니다.
  - TypeScript 를 필수적으로 사용합니다.
  - 디자인은 엘카데미(https://academy.elice.io/courses/all)에 구현된 페이지를
모방하여 구현합니다.

- Filter
  - [무료], [유료] 를 모두 선택하거나 하나만 선택, 그리고 아예 선택하지 않을 수 있습니다.
  - 필터는 filter_conditions 파라미터를 이용합니다.(JSON type)
  - 브라우저를 새로고침을 하여도 선택된 필터가 유지될 수 있도록 url query 를
사용합니다.
    - 예: https://academy.elice.io/courses/all?keyword=c 언어&price=free&price=paid

- Pagination
  - 라이브러리를 쓰지 않고 직접 구현해야 합니다.
  - 작동방식은 실제 프로덕션과 동일하게 동작해야합니다. 
(arrow, 현재 페이지 유지 방법 등)
  - 한 페이지당 최대 20 개의 코스 카드를 표시할 수 있도록 합니다.
  - Page 의 이동 시 count 값을 20 으로 고정하고 offset 값을 변화시키면서 페이지를
이동할 수 있습니다.
  - 1 페이지: offset: 0, count: 20
  - 2 페이지: offset: 20, count: 20


- Api
  - API 를 부르기 위해서 사용하는 ajax 라이브러리는 자유롭게 선택하시면 됩니다.

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
  
  https://github.com/oridori2705/elice-project/assets/90139306/ce8d2efb-39b3-4a79-a70a-84064e266436

-> 가로로 떨리는 문제 영상

<br/>

- 스크롤 바 스타일링 추가

  - 엘리스 예제 사이트 그대로 구현

- ⚠️ **API Base url은 env 파일로 분리해서 관리**
  - 클론해서 사용시 env 추가 필요

### 📜관계도 정리

<img src="https://i.ibb.co/418DBWP/saf-fasfsafas.png"/>

</details>

<details>
<summary style="font-size: 17px; font-weight: 600; background-color: rgba(115, 83, 234,0.2);">✨5. SearchBar 컴포넌트 구현 및 검색 기능 구현</summary>

- 🔗[PR](https://github.com/oridori2705/elice-project/pull/10)

### 🛠️ SearchBar 컴포넌트 구현

![image](https://github.com/oridori2705/elice-project/assets/90139306/e722d0f7-8812-45fc-9b64-b5f1bf743d2e)

- 상위에서 filters값을 변경하는 setFilters 함수를 props로 받음
- 검색어를 입력하면 setFilters 함수를 실행해서 API 요청 


### 🛠️ 검색 기능 구현

- setFilters로 하위에서 검색어를 받아오면 해당 데이터를 API 파라미터에 `{title: `%${검색어} %`}` 형식으로 가공 후 전달
- ```
   else if (key === 'keyword') {
      apiParams['$and'][0].title = `%${values}%`
    }
  ```
- 검색 기능에 디바운스 기법 추가
- 검색 시 url query에 해당 검색어 저장 -> 새로고침 시 유지되도록하는 기능 구현
- 기존 filters 구조에 "keyword" 데이터 추가
- ```
  export interface Filters {
    category: number[]
    courseType: number[]
    format: number[]
    level: number[]
    price: number[]
    programmingLanguage: number[]
    keyword?: string
  }
  ```


### 🚧 특이 사항

- filter에 "keyword"타입 추가로 인해 setFilter 함수를 사용하는 chip 컴포넌트에서 타입 에러 발생
  - 조건문 추가해 타입 좁히기로 해결

-  Loding중일 때 조건부 렌더링으로 Spinner 컴포넌트가 나타나면 카드 리스트가 사라졌다가 생기는 부분이 좋지 않은 사용자 경험을 줄 수 있지 않을까 예상함
  -  Loading을 조건부 렌더링에서 제외해서 필터값이 바뀌어도 깜빡하는 현상 해결
  - Spinner는 로딩 중을 화면에서 표현하기만 함

- 검색어를 입력한 후에 지우면 url query에 `빈 값`으로 존재하고 있음
  - 예제 사이트도 검색어를 입력 후 지우면 url query에 동일하게 존재함
  - 일단 중요한 부분이 아님을 판단했지만 이후 없앨 수도 있도록 계획
 

### 📜관계도 정리
![image](https://github.com/oridori2705/elice-project/assets/90139306/1f7aaba4-7d88-41ee-8062-e596c020e9fc)


</details>


<details>
<summary style="font-size: 17px; font-weight: 600; background-color: rgba(115, 83, 234,0.2);">✨6. Pagination 컴포넌트 구현 및 페이지네이션 기능 구현</summary>

- 🔗[PR](https://github.com/oridori2705/elice-project/pull/12)

### 🛠️ Pagination 컴포넌트 구현

#### ✨페이지네이션의 숫자 나열을 위해 조건을 나열하면서 예외상황을 확인함

- `전체 페이지 수 = 전체 코스 개수 / 한 페이지 당 보여지는 코스 개수`
- 현재 보여질 페이지를 계산한다( 최대 `5`개가 보여져야 함)
  - 보여질 페이지 번호의 반값 계산 = `Math.floor( 5 / 2 )`
  - `보여질 시작 페이지 번호 =  Math.max(현재 페이지 번호  - Math.floor( 5 / 2 ) , 1)`
      - Math.max를 한 이유는 최소 값이 1이기 때문입니다.
  - `보여질 마지막 페이지 번호 =  Math.min(현재 페이지 번호 + Math.floor( 5 / 2 ) , 전체 페이지 수)`
      - Math.min을 한 이유는 최대 값이 `전체 페이지 수` 이기 때문입니다.

- 이때 `보여질 시작 페이지가` 1일 때( `보여질 페이지의 반값`보다 작거나 같을 경우)  `보여질 마지막 페이지`를 조정해줘야 합니다.
   -  예를 들어 1또는 2라면 endPage가 3또는 4가 되어버리는데 페이지가 더 있다면 5까지는 보여줘야 한다.
   -  그러면 5는 최소로 맞춰줘야 한다.
   - 또한 `전체 페이지 수`가 `보여질 페이지 번호의 반값`보다 작을 때도 생각해야 합니다.
   - 예를 들어 `전체 페이지 수`가 3인데 5페이지를 보여줄 수는 없습니다.

- 마찬가지로 `보여질 마지막 페이지`에서도 만약 `전체 페이지 수`에 가깝다면 `보여질 시작 페이지`를 조정해줘야 한다.
  - 예를 들어 `전체 페이지 수`가 10이고, `현재 페이지`가 9면 `보여질 시작 페이지`는 6 이어야 합니다. (10 - 5 + 1 =6) 
  - 또한 만약에 `전체 페이지 수`가 3이고, `현재 페이지`가 2면 `보여질 시작 페이지`는 1이어야 합니다. (시작 페이지는 1이 마지노선)
  - 그러므로 1 이하로 내려가지 않도록 최소 값을 1로 고정해줘야 합니다.

<hr/>

#### ✨상태 관리를 상위에서 관리

- 상위에서 Pagination의 값과 현재 offset값을 관리하는 state를 정의
- 해당 상태는 `1, 2, 3, 4...` 로 증가함
- offset에 넘겨줄 때 `20 * ( x -1 )` 로 계산 후에 넘겨줌
- 해당 상태가 현재 페이지 단위임  ex) 1페이지, 2페이지...


### 🛠️ 페이지네이션 기능 시 스크롤 이동 기능 구현

- 기존에는 상위에서 `useLayoutEffect`를 이용해 `offset`값이 바뀔 때마다 스크롤 이동을 수행하도록 함
- 하지만 페이지네이션 기능 이후 필터 기능을 작동 시 최초 한번 불필요한 스크롤 이동이 발생
- 이는 필터 값이 바뀌면 무조건 `offset` 값이 1부터 시작되도록 하는 로직으로 인해 생김
- 그래서 페이지네이션 부분의 클릭 이벤트가 수행될 때 스크롤 이동이 수행되도록 수정함
- 즉 상위에서 진행하던 스크롤 이동을 하위 컴포넌트가 수행하도록 지정함
- **이 과정에서 Pagination 컴포넌트가 스크롤 이동에 필요한 값들에 의존이 되지는 않을까 고민하게 됨**


### 🚧 특이 사항

- set함수의 타입에 대한 고민
  - 기존에는 () => void 와 같은 형식으로 작성함
  - 하지만  Dispatch와 setStateAction을 통해 setState 함수의 타입을 정의해주면 상태 업데이트 필요 시 요구하는 인자와 반환 값을 정확하게 명시할 수 있음을 인지함
  -  Dispatch와 setStateAction 타입 사용을 지향
  - `setFilters: Dispatch<SetStateAction<Filters>>` 이나 `setOffset: Dispatch<SetStateAction<number>>` 와 같이 코드 구성

- scrollIntoView({behavior: 'smooth'})기능이 크롬에서 작동을 안하는 문제 발견 후 해당 기능 사용 제거
- useRef 타입에 대한 3가지 종류를 알게 됨
  -  해당 [링크](https://driip.me/7126d5d5-1937-44a8-98ed-f9065a7c35b5)를 보고 타입을 지정할 때 생각하고 지정할 수 있게 

- 현재 요구사항에는 실제 프로덕션과 동일하게 진행해야하고, 현재 페이지 유지 방법 등 이라고 작성되어있다.
  - 실제 프로덕션에서는 페이지네이션에는 새로고침시 페이지 유지가 안되고 있다.
  - 그래서 일단 페이지 유지는 제외.
  - 결과적으로 실제 프로덕션과 동일하게 진행

### 📜관계도 정리

![image](https://github.com/oridori2705/elice-project/assets/90139306/abbb39df-8b92-4afb-a509-4afab6f3a24d)


</details>


## ⚡ 기술 스택

<table>
    <thead>
        <tr>
            <th>분류</th>
            <th>기술 스택</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                  <p>프론트엔드</p>
            </td>
            <td>
                 <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=ffffff">
                 <img src="https://img.shields.io/badge/ReactRouterDom-CA4245?style=flat-square&logo=react-router&logoColor=white"/>
                 <img src="https://img.shields.io/badge/Emotion-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
                  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> 
                 <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>
            </td>
        </tr>
          <tr>
            <td>
                <p>배포</p>
            </td>
            <td>
                <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
            </td>
        </tr>
    </tbody>
</table>

```
  "dependencies": {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.13.0",
    "@typescript-eslint/parser": "^7.13.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "eslint": "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-import-resolver-typescript": "^3.6.1",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-react": "^7.34.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "eslint-plugin-simple-import-sort": "^12.1.0",
    "prettier": "^3.3.2",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
```

## 📹 기능 영상

### 🌪️ 필터 기능

https://github.com/oridori2705/elice-project/assets/90139306/67b6b894-f5e5-4ded-965f-806872383b25



### 🔍 검색 기능




https://github.com/oridori2705/elice-project/assets/90139306/8444d9d7-e749-4a30-b519-fd9bfa6289b6




### 👀 페이지네이션 기능



https://github.com/oridori2705/elice-project/assets/90139306/f1106772-1940-48e0-a413-fb2cd8190361



## 🤔 고민되거나 어려웠던 점


