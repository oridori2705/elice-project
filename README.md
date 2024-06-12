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
<summary>⚙️1. 개발 환경 세팅하기</summary>

## 🛠️ 개발 환경 세팅(Vite, Eslint, Prettier, Emotion)

- Vite를 사용해 빠르게 React 개발 환경 구축
- 빠르고 안정된 개발을 위해 Eslint와 Prettier 설정
- Styled-Components를 사용하기 위해 Emotion 설치
- 예제 사이트를 모방해 프로젝트 완성을 위해 폰트 설치

해당 과정에서 Eslint와 Prettier 설정에 대해 [더 깊이 알게 되었습니다.](https://ydoag2003.tistory.com/493)

</details>
<details>
<summary>✨2. CourseCard 컴포넌트 구현하기</summary>

## 🛠️ CourseCard 컴포넌트 구현

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
