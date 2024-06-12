import styled from '@emotion/styled'

import CourseListContainer from './components/CourseListContainer'
import NoResultsFound from './components/NoResultsFound'
import Spinner from './components/Spinner'
import useFetchCourseList from './hooks/useFetchCourseList'

const RootDiv = styled.div`
  max-width: 1280px;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 3.5rem 16px;
`

function App() {
  const { courseList, isLoading, error } = useFetchCourseList()

  const renderContent = () => {
    if (isLoading) {
      return <Spinner />
    } else if (error) {
      return <div>{error}</div>
    } else if (courseList && courseList.courses.length > 0) {
      return <CourseListContainer courseList={courseList} />
    } else {
      return <NoResultsFound />
    }
  }

  return <RootDiv>{renderContent()}</RootDiv>
}

export default App
