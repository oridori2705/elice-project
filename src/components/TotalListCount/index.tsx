import styled from '@emotion/styled'

const TotalListCountWrapperDiv = styled.div`
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  border-bottom: 1px solid rgb(225, 226, 228);
  font-size: 0.75rem;
  color: #222;
  font-weight: 700;
  display: block;
`

const TotalListCount = ({ count }: { count: number }) => {
  return <TotalListCountWrapperDiv>전체 {count}개</TotalListCountWrapperDiv>
}

export default TotalListCount
