import styled from '@emotion/styled'

import CourseListContainer from './components/CourseListContainer'
import FilterTable from './components/FilterTable'
import NoResultsFound from './components/NoResultsFound'
import Pagination from './components/Pagination'
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner'
import useFetchCourseList from './hooks/useFetchCourseList'

const RootDiv = styled.div`
  max-width: 1280px;
  min-height: 1350px;
  margin: 0 auto;
  display: block;
  padding: 3.5rem 16px;
`

function App() {
  const {
    courseList,
    isLoading,
    error,
    offset,
    scrollToStartRef,
    setOffset,
    setFilters
  } = useFetchCourseList()

  const renderContent = () => {
    if (error) {
      return <div>{error}</div>
    } else if (courseList && courseList.courses.length > 0) {
      return (
        <>
          <CourseListContainer courseList={courseList} />
          <Pagination
            scrollToStartRef={scrollToStartRef}
            currentOffset={offset}
            totalItems={courseList?.course_count}
            setOffset={setOffset}
          />
        </>
      )
    } else {
      return <NoResultsFound />
    }
  }

  return (
    <RootDiv>
      <div ref={scrollToStartRef} />
      <SearchBar setFilters={setFilters} />
      <FilterTable setFilters={setFilters} />
      {renderContent()}
      {isLoading && <Spinner />}
    </RootDiv>
  )
}

export default App
