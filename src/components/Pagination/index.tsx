import { Dispatch, MutableRefObject, SetStateAction } from 'react'

import {
  PaginationContainerDiv,
  PaginationContainerFlexDiv,
  PaginationLeftButton,
  PaginationNumberButton,
  PaginationNumberDiv,
  PaginationRightButton,
  PaginationWrapperDiv
} from './styled'

interface PaginationProps {
  totalItems: number
  itemsPerPage?: number
  currentOffset: number
  scrollToStartRef: MutableRefObject<HTMLDivElement | null>
  setOffset: Dispatch<SetStateAction<number>>
}
interface HandlePageChangeParams {
  currentPage: number
  isActive?: boolean
}

const Pagination = ({
  totalItems,
  itemsPerPage = 20,
  currentOffset,
  scrollToStartRef,
  setOffset
}: PaginationProps) => {
  const handlePageChange = ({
    currentPage,
    isActive = true
  }: HandlePageChangeParams) => {
    if (!isActive) return
    scrollToStartRef.current?.scrollIntoView()
    setOffset(currentPage)
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const pagesToShow = 5
  const halfPagesToShow = Math.floor(pagesToShow / 2)

  const calculateStartPage = () => {
    if (currentOffset <= halfPagesToShow) {
      return 1
    }
    if (currentOffset + halfPagesToShow > totalPages) {
      return Math.max(totalPages - pagesToShow + 1, 1)
    }
    return Math.max(currentOffset - halfPagesToShow, 1)
  }

  const calculateEndPage = (startPage: number) => {
    return Math.min(startPage + pagesToShow - 1, totalPages)
  }

  const startPage = calculateStartPage()
  const endPage = calculateEndPage(startPage)

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  )
  return (
    <PaginationWrapperDiv>
      <PaginationContainerDiv>
        <PaginationContainerFlexDiv>
          <PaginationLeftButton
            isActive={currentOffset > 1}
            onClick={() =>
              handlePageChange({
                currentPage: currentOffset - 1,
                isActive: currentOffset > 1
              })
            }>
            {'<'}
          </PaginationLeftButton>
          <PaginationNumberDiv>
            {pages.map(page => (
              <PaginationNumberButton
                key={page}
                onClick={() => handlePageChange({ currentPage: page })}
                isActive={page === currentOffset}>
                {page}
              </PaginationNumberButton>
            ))}
          </PaginationNumberDiv>
          <PaginationRightButton
            isActive={currentOffset < totalPages}
            onClick={() =>
              handlePageChange({
                currentPage: currentOffset + 1,
                isActive: currentOffset < totalPages
              })
            }>
            {'>'}
          </PaginationRightButton>
        </PaginationContainerFlexDiv>
      </PaginationContainerDiv>
    </PaginationWrapperDiv>
  )
}

export default Pagination
