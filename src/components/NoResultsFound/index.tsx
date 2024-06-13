import {
  NoResultFoundFlexDiv,
  NoResultFoundIconImageDiv,
  NoResultFoundTextP,
  NoResultFoundWrapperDiv
} from './styled'

const NoResultsFound = () => {
  return (
    <NoResultFoundWrapperDiv>
      <NoResultFoundFlexDiv>
        <NoResultFoundIconImageDiv />
        <NoResultFoundTextP>검색 결과가 없습니다.</NoResultFoundTextP>
      </NoResultFoundFlexDiv>
    </NoResultFoundWrapperDiv>
  )
}

export default NoResultsFound
