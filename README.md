# ✨엘리스 미니 프로젝트

🔗 [배포 링크](https://elice-project-six.vercel.app/)
<details>
<summary>🚨 모바일 환경으로 접속하면 CORS에러 발생으로 접속불가합니다!</summary>

- chrome://inspect/#devices 를 이용해서 모바일과 PC를 USB로 연결한 뒤 디버깅 모드로 수행
- 아래와 같은 오류 발생
![image](https://github.com/oridori2705/elice-project/assets/90139306/3051c587-4dc1-4de4-bf05-911c4e6ed6d1)

- 현재 CORS에러로 인한 문제로 인지하고 있음
  ![image](https://github.com/oridori2705/elice-project/assets/90139306/cbce7f22-7693-4873-87e3-b45bc4b891a0)
- `왜 PC환경에서는 가능하고 모바일 환경에서는 불가능할까?` 에 대해 자료를 찾고있음
- User Agent의 차단 가능성

</details>

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

> 외부 라이브러리를 최소화해서 사용하려고 했습니다. 미니프로젝트인 만큼 과도한 외부 라이브러리 사용은 좋지 않다고 개인적으로 생각해봤습니다.


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
<details> 
<summary>⚡ API 응답 데이터에서 필요한 데이터를 구분해서 좁혀야 할 때가 있었는데 그 때 생기는 타입에러에 대해서 고민이 있었습니다.</summary>
  
- 예를들어 필터 데이터는 약 30여개가 있었는데 그 중에서 과목 카드 요소에 출력할 대분류 부분만 출력해야했던 경우가 있었습니다.
- ![image](https://github.com/oridori2705/elice-project/assets/90139306/413598d3-10ea-4a36-8318-bbd62d255e0f)
- 이때 `사용자 정의 타입 가드`를 사용해보았습니다.
- ```
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
- 위 같은 경우 특정 값이 특정 문자열 집합에 포함되는지를 검사하는 로직을 포함해야 했습니다.
- typeof나 intanceof를 이용하는 간단한 상황만 경험했어서 사용자 정의 타입가드를 사용해본 적이 없었는데 이번 과제를 통해 처음 사용해볼 수 있었습니다.
</details>

<br/>

<details> 
<summary>⚡ 과연 비즈니스 로직을 상위에서 모아서 처리하는 것이 옳은 것일까? 에 대해 고민했습니다.</summary>
  
- 저는 `상위에서 모든 상태를 관리`하고 `서버에서 데이터 요청하는 로직` 또한 상위에서 담당하도록 했습니다.
- 이를 통해서 `상태 관리가 용이`했고, 하위 컴포넌트에서는 단일 책임만을 가질 수 있게 되었습니다.
- 하지만 상위에서 모든 상태를 관리하다 보니 `너무 과도하게 역할을 수행`하는 것이 아닐까? 라는 생각이 들었습니다.
- 지금은 미니 프로젝트이므로 이러한 설계가 괜찮을 것 같았지만 만약에 아주 많은 상태와 비즈니스 로직을 사용해야한다면 과연 상위에서 이를 부담하는 것이 옳을까? 어떻게 해결할 수 있을까에 대해서 생각하게 되었습니다.
- 해결 방법으로는 `상태 관리 라이브러리 활용`을 생각해보았습니다.
- 복잡하거나 관리해야할 상태가 많아지면 상위에서 관리하는 것이 아닌 `상태 관리 라이브러리` 활용을 해야할 것 같다고 생각했습니다.
- 일단 현재 과제는 미니 프로젝트 이므로 `상태 관리 라이브러리`는 사용하지 않았습니다.

</details>


<br/>

<details>   
<summary>⚡ 상위에서 상태를 관리하고, 하위 컴포넌트에게 set함수를 props로 내려주는 것에 대해서 과연 옳은 방식일까? 에 대해 고민했습니다.</summary>
  
- 이를 통해서 개발자의 입장에서는 아주 간단하게 기능을 구현할 수 있었습니다.
- 그렇지만 이러한 방식이 과연 옳은 방식일까? 에 대해서 고민하게 되었습니다.
- 관련 학습 자료를 찾으면서 이러한 방식을 바꾸기로 결정했습니다. [관련 PR](https://github.com/oridori2705/elice-project/pull/16)
- 이를 통해서 컴포넌트들이 좀 더 독립성이 높아졌고, 각 컴포넌트는 그저 함수를 호출하기만 하면 되기 때문에 재사용성이 높아졌습니다. -> 내부에서 복잡한 로직을 수행할 필요가 없어졌습니다.

### 😁 상위에서 상태를 관리하면서 생겼던 불필요한 리-렌더링을 최적화 했습니다.
> 상위에서 모든 상태를 관리하고 하위에서 set함수를 props해주고 있었기 때문에 상위 컴포넌트가 리-렌더링 되었을 때 모든 컴포넌트가 리-렌더링이 되는 상황

- 콜백함수를 사용하게 되면서 이를 메모이제이션하면 어떨까 생각하게 되었습니다.
- 콜백 함수를 useCallback으로 감싸준 다음 각 하위 컴포넌트는 React.memo로 감싸주었습니다.
- 이를 통해 불필요한 렌더링을 줄일 수 있었습니다.
  <details>
  <summary>👀 실제 예시 보기</summary>
  
  > 필터 테이블에서 하나의 필터를 한 번 클릭한 상황입니다.
  
  ##  🥲 최적화 미 적용 시 렌더링
  
  ![image](https://github.com/oridori2705/elice-project/assets/90139306/5a327876-a29a-4d72-a295-75e9ee817844)
  
  
  ##  😁 최적화 적용 시 렌더링
  
  ![image](https://github.com/oridori2705/elice-project/assets/90139306/e5a9393e-92d0-4f61-b991-755c1af64786)
  
  ### 📄 예시 설명
  - 현재 회색 부분으로 된 것이 렌더링 되지 않았다는 의미입니다.
  - 최적화 미적용시에는 3번의 렌더링에서 모든 컴포넌트가 렌더링 되고 있습니다.
  - 하지만 최적화 적용 이후에는 각 컴포넌트가 불필요한 상황에는 렌더링 되지 않고 있습니다.
  
  </details>
</details>

<br/>


<details>   
<summary>⚡ 디바운스 함수를 useEffect로 구현하는 로직이 좋을까? 아니면 기본적인 로직으로로 구현한 로직이 좋을까? 에 대해 고민했습니다.</summary>
  
  - useEffect를 이용해서 디바운스 기법을 사용하는 방법이 있고, 기존에 제가 사용하던 기본적인 함수로 구현한 디바운싱 기법이 좋을까? 에 대해 고민했습니다.
  - useEffect를 사용한 방법은 코드가 더욱 리액트스러워서 보기가 좋았습니다.
  - ```
      function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);
      
          return () => {
            clearTimeout(timer);
          };
        }, [value, delay]);
      
        return debouncedValue;
      }
    
    export default useDebounce;
    ```
  - 제가 기존에 사용하던 디바운스 함수는 재사용성은 높지만 한번에 보기 어려울 수 있었습니다.
  - ```
      import { useRef } from 'react'
  
      const useDebounce = <T extends (...args: any[]) => void>(
        fn: T,
        delay: number
      ) => {
        const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)
      
        return (...args: Parameters<T>): void => {
          if (timeout.current) clearTimeout(timeout.current)
          timeout.current = setTimeout(() => {
            fn(...args)
          }, delay)
        }
      }
      
      export default useDebounce
    ```
  - 하지만 타입스크립트에서 사용하기 용이하고, 재사용성이 높은 기존 함수를 채택했습니다.
  - 그리고 기존에 let으로 사용하던 부분을 `useRef`를 사용해 리액트에서의 이점을 활용했습니다.

</details>

<br/>

<details>   
<summary>⚡타입 단언 as 키워드를 사용할 수 밖에 없는 것인가? 에 대해 고민했습니다.</summary>
  
  - [관련 PR](https://github.com/oridori2705/elice-project/pull/20)
  
### 🚨 타입 단언을 사용하기보다 사용하는 데이터의 타입을 넓은 타입으로 지정하지는 않았는지 확인
![image](https://github.com/oridori2705/elice-project/assets/90139306/0e8f1d56-0552-4814-bcfc-24946c592982)

### 🚨 API 응답 데이터를 잘 확인하고 타입을 정의할 때 겹치지 않도록 주의

![image](https://github.com/oridori2705/elice-project/assets/90139306/97e6f336-f2f1-4196-a1c6-75bbb6236cc7)

- 이 경우에는 되도록이면 타입을 상속받아 활용하는 방식을 더 잘 사용해야겠다고 생각이 들었습니다.
- 복잡한 데이터들의 타입을 정의할 때는 이러한 상황도 예상해야 한다고 생각했습니다.

</details>

