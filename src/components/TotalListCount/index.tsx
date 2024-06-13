import { TotalListCountWrapperDiv } from './styled'

const TotalListCount = ({ count }: { count: number }) => {
  return <TotalListCountWrapperDiv>전체 {count}개</TotalListCountWrapperDiv>
}

export default TotalListCount
