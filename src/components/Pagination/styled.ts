import styled from '@emotion/styled'

interface PaginationButtonProps {
  isActive: boolean
}

export const PaginationWrapperDiv = styled.div`
  display: flex;
  margin-top: 1.5rem;
  align-items: center;
  justify-content: center;
`

export const PaginationContainerDiv = styled.div`
  display: inline-block;
  height: 1.5rem;
  position: relative;
  text-align: center;
`

export const PaginationContainerFlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationNumberDiv = styled.div`
  display: flex;
  height: 1.5rem;
  line-height: 1.5rem;
`
export const PaginationNumberButton = styled.button<PaginationButtonProps>`
  display: inline-flex;
  background-color: ${props => (props.isActive ? '#524fa1;' : '')};
  color: ${props => (props.isActive ? '#fff' : '#999')};
  transition: background-color 0.5s ease;
  line-height: 1.5rem;
  border-radius: 0.25rem;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;
  font-size: 0.775rem;
  align-items: center;
  justify-content: center;
  margin: 0 0.375rem;

  cursor: pointer;
`

export const PaginationLeftButton = styled.button<PaginationButtonProps>`
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.375rem;
  font-weight: 800;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25rem;
  color: ${props => (props.isActive ? '#524fa1' : '#ccc')};
  cursor: ${props => (props.isActive ? 'pointer' : 'not-allowed')};
`

export const PaginationRightButton = styled.button<PaginationButtonProps>`
  margin-left: 0.375rem;
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  font-weight: 800;
  font-size: 17px;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 0.25rem;
  color: ${props => (props.isActive ? '#524fa1' : '#ccc')};
  cursor: ${props => (props.isActive ? 'pointer' : 'not-allowed')};
`
