import { ResponseDataType } from '~/types/data'

import CourseCard from '../CourseCard'
import CourseCardList from '../CourseCardList'
import TotalListCount from '../TotalListCount'

const CourseListContainer = ({
  courseList
}: {
  courseList: ResponseDataType
}) => {
  return (
    <div>
      <TotalListCount count={courseList.course_count} />
      <CourseCardList>
        {courseList.courses.map(data => (
          <CourseCard key={data.id}>
            <CourseCard.CardImage
              imgUrl={data.image_file_url || data.logo_file_url}
              isLogo={!data.image_file_url}
            />
            <CourseCard.CardMainWrapper>
              <CourseCard.CardMainInfoWrapper>
                <CourseCard.CardTag tag={data.tags} />
                <CourseCard.CardTitle title={data.title} />
                <CourseCard.CardMainText content={data.short_description} />
              </CourseCard.CardMainInfoWrapper>
              <CourseCard.CardPrice
                enroll_type={data.enroll_type}
                is_free={data.is_free}
                price={data.price}
              />
            </CourseCard.CardMainWrapper>
          </CourseCard>
        ))}
      </CourseCardList>
    </div>
  )
}

export default CourseListContainer
